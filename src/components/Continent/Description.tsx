import { Box, Flex, Text } from '@chakra-ui/react';
import { ContinentInformation } from './Information';

interface ContinentDescriptionProps {
  description: string;
  countries: number;
  languages: number;
  cities: number;
}

export function ContinentDescription ({
  cities,
  countries,
  description,
  languages
}: ContinentDescriptionProps) {
  return (
    <Flex
      px={['16px', '44px', '72px', '140px']}
      py={['24px', '44px', '80px']}
      direction={['column', 'column', 'column', 'row']}
    >
      <Box
        w={['100%', '100%', '100%', '50%']}
        pr={['0', '0', '35px', '70px']}
      >
        <Text
          textAlign='justify'
          lineHeight={['21px', '36px']}
          fontSize={['md', 'lg']}
        >
          {description}
        </Text>
      </Box>
      <Flex
        w={['100%', '100%', '100%', '50%']}
        pl={['0', '0', '35px', '70px']}
        py={['16px', '16px', '32px', '0']}
        justifyContent='space-between'
        align='center'
      >
        <ContinentInformation number={countries} legend='países' />
        <ContinentInformation number={languages} legend='idiomas' />
        <ContinentInformation number={cities} legend='cidades +100' />
      </Flex>
    </Flex>
  );
}
