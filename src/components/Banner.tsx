import { Box, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner () {
  const showAirPlane = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      bgImage="url('/images/background.png')"
      bgRepeat='no-repeat'
      bgSize='cover'
      h={[163, 284, 284, 335]}
      direction='row'
      justify='space-between'
      px={['16px', '80px', '80px', '140px']}
    >
      <Flex
        py={['28px', '52px', '52px', '80px']}
        maxW={525}
        direction='column'
        gap='20px'
      >
        <Heading
          fontSize={['xl', '2xl', '2xl', '4xl']}
          color='white.500'
          fontWeight={500}
          lineHeight={['25px', '54px']}
        >
          5 Continentes,<br />infinitas possibilidades.
        </Heading>
        <Text
          fontWeight={400}
          color='white.100'
          fontSize={['sm', 'xl']}
          lineHeight={['21px', '30px']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {showAirPlane && (
        <Image
          src='/images/airplane.svg'
          w={417}
          position='relative'
          top={45}
          transform='rotate(3deg)'
        />
      )}
    </Flex>
  );
}