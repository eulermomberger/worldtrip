import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface CityCardProps {
  name: string;
  image: string;
  country: {
    name: string;
    flag: string;
  }
}

export function CityCard ({ name, image, country }: CityCardProps) {
  return (
    <Box h={279} w={256}>
      <Image src={image} w={256} h={173} borderTopRadius='md'/>
      <Flex
        h={106}
        border='1px solid'
        borderColor='yellow.50'
        borderBottomRadius='md'
        borderTop='none'
        py='18px'
        px='24px'
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex direction='column' h='70px'>
          <Text fontSize='xl' fontWeight='600' color='gray.500'>
            {name}
          </Text>
          <Text mt='1.5' fontSize='md' fontWeight='500' color='gray.100'>
            {country.name}
          </Text>
        </Flex>
        <Image
          src={country.flag}
          h='30px'
          w='30px'
          borderRadius='2xl'
          objectFit='cover'
        />
      </Flex>
    </Box>
  );
}
