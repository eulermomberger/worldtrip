import { Box, Grid, Heading } from '@chakra-ui/react';
import { CityCard } from './CityCard';

interface MostVisitedCitiesProps {
  cities: {
    uid: string;
    name: string;
    rank: number;
    image: string;
    country: {
      name: string,
      flag: string;
    };
  }[]
}

export function MostVisitedCities ({ cities }: MostVisitedCitiesProps) {
  return (
    <Box px={['16px', '44px', '72px', '140px']}>
      <Heading fontSize={['2xl', '4xl']} fontWeight='medium'>Cidades +100</Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '32px', '45px']}
        alignItems='center'
        justifyItems={['center', 'flex-start']}
        py='40px'
      >
        {cities.map((city) => (
          <CityCard
            key={city.uid}
            name={city.name}
            image={city.image || '../images/cidade.jpg'}
            country={city.country}
          />
        ))}
      </Grid>
    </Box>
  );
}
