import { Box, Heading } from '@chakra-ui/react';
import { query } from 'faunadb';
import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { ContinentsCarousel } from '../components/ContinentsCarousel';
import { Header } from '../components/Header';
import { LineSeparator } from '../components/LineSeparator';
import { TravelTypes } from '../components/TravelTypes';
import { fauna } from '../services/fauna';

interface ContinentData {
  uid: number;
  slideImage: string;
  name: string;
  legend: string;
};

interface ContinentsResponse {
  data: {
    ref: any;
    ts: number;
    data: ContinentData;
  }[]
}

interface HomeProps {
  continents: ContinentData[];
};

export default function Home({ continents }: HomeProps) {
  return (
    <Box>
      <Header />

      <Banner />

      <TravelTypes />

      <LineSeparator />

      <Box my={['24px', '52px']}>
        <Heading
          fontSize={['xl', '2xl', '2xl', '4xl']}
          lineHeight={['30px', '54px']}
          fontWeight='500'
          textAlign='center'
        >
          Vamos nessa?
        </Heading>
        <Heading
          fontSize={['xl', '2xl', '2xl', '4xl']}
          lineHeight={['30px', '54px']}
          fontWeight='500'
          textAlign='center'
        >
          Então escolha seu continente
        </Heading>
      </Box>

      <Box px={['0', '100px']} mb='40px'>
        <ContinentsCarousel continents={continents}/>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let continents: ContinentData[] | [] = [];

  await fauna.query<ContinentsResponse>(
    query.Map(
      query.Paginate(query.Documents(query.Collection('continents'))),
      query.Lambda((c) => query.Get(c))
    )
  ).then(async (response) => {
    continents = response.data.map((data) => ({ uid: data.ts, ...data.data }));
  });

  return {
    props: {
      continents
    }
  };
};
