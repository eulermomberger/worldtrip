import { Grid, GridItem } from '@chakra-ui/react';

import { TravelItem } from './TravelItem';

export function TravelTypes () {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w='100%'
      mt={['10', '32']}
    >
      <GridItem>
        <TravelItem iconUrl='./images/cocktail.svg' title='vida noturna'/>
      </GridItem>
      <GridItem>
        <TravelItem iconUrl='./images/surf.svg' title='praia'/>
      </GridItem>
      <GridItem>
        <TravelItem iconUrl='./images/building.svg' title='moderno'/>
      </GridItem>
      <GridItem>
        <TravelItem iconUrl='./images/museum.svg' title='clássico'/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelItem iconUrl='./images/earth.svg' title='e mais...'/>
      </GridItem>
    </Grid>
  );
}
