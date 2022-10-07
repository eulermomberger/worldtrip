import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelItemProps {
  iconUrl: string;
  title: string;
}

export function TravelItem ({ iconUrl, title }: TravelItemProps) {
  const showIcon = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Flex
      direction={['row', 'column']}
      align='center'
      justify='center'
    >
      {showIcon ? (
        <Image
          src={iconUrl}
          h={85}
          w={85}
          mb='2'
        />
      ) : (
        <Text color='yellow.500' fontSize='4xl' mr='2'>.</Text>
      )}
      <Text fontWeight={600} fontSize={['md', 'xl', '2xl']} mt='4'>
        {title}
      </Text>
    </Flex>
  );
}
