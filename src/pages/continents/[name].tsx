import { Box } from '@chakra-ui/react';
import { query as q } from 'faunadb';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ContinentBanner } from '../../components/Continent/Banner';
import { ContinentDescription } from '../../components/Continent/Description';
import { MostVisitedCities } from '../../components/Continent/MostVisitedCities';

import { Header } from '../../components/Header';
import { fauna } from '../../services/fauna';

interface City {
  uid: string;
  name: string;
  rank: number;
  image: string;
  country: {
    name: string,
    flag: string;
  };
};

interface ContinentData {
  bannerImage: string;
  name: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
};

interface ContinentResponse {
  ref: { id: string; };
  ts: number;
  data: ContinentData
}

interface CountryResponse {
  country: {
    name: string,
    flag: string;
  },
  cities: {
    ref: { id: string; };
    ts: number;
    data: City;
  }[]
}

interface ContinentProps {
  continent: ContinentData;
  cities: City[];
};

export default function Continent({ continent, cities }: ContinentProps) {
  return (
    <Box paddingBottom='2'>
      <Header showBackButton/>

      <ContinentBanner
        imageUrl={continent.bannerImage}
        name={continent.name}
      />

      <ContinentDescription
        cities={continent.cities}
        countries={continent.countries}
        description={continent.description}
        languages={continent.languages}
      />

      <MostVisitedCities cities={cities}/>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let continent: ContinentData | null = null;
  let citiesArray: City[] = [];

  const continentResponse = await fauna.query<ContinentResponse>(
    q.Get(
      q.Match(
        q.Index('continents_by_name'),
        params.name
      )
    )
  );

  await fauna.query<CountryResponse[]>(
    q.Select(
      'data',
      q.Map(
        q.Paginate(q.Match(q.Index('countries_by_continent_ref'), continentResponse.ref.id)),
        q.Lambda((c) =>
          q.Let(
            {
              country: q.Select('id', q.Select('ref', q.Get(c))),
              cities: q.Map(
                  q.Paginate(q.Match(q.Index('cities_by_country_ref'), q.Var('country'))),
                  q.Lambda((ci) => q.Get(ci))
                )
            },
            q.Merge(
              {
                country: q.Select(
                  'data',
                  q.Get(q.Ref(q.Collection('countries'), q.Var('country')))
                )
              },
              { cities: q.Select('data', q.Var('cities')) }
            )
          )
        )
      )
    )
  ).then((data) => {
    data.forEach(({ country, cities }) => {
      citiesArray = citiesArray.concat(cities.map((city) => (
        { ...city.data, uid: city.ref.id, country: { name: country.name, flag: country.flag } }
      )))
    });
  });

  continent = { ...continentResponse.data, cities: citiesArray.length };

  return {
    props: {
      continent,
      cities: citiesArray
    }
  };
};
