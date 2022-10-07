import { Flex, Text } from '@chakra-ui/react';

interface ContinentInformationProps {
  number: number;
  legend: string;
};

export function ContinentInformation ({ legend, number }: ContinentInformationProps) {
  return (
    <Flex direction='column' align={['flex-start', 'center']}>
      <Text fontSize={['2xl', '4xl']} fontWeight='600' color='yellow.500'>
        {number}
      </Text>
      <Text fontSize={['lg', 'xl']} fontWeight='600' color='gray.500'>
        {legend}
      </Text>
    </Flex>
  );
}
