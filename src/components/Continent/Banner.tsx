import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  imageUrl: string;
  name: string;
};

export function ContinentBanner ({ imageUrl, name }: ContinentBannerProps) {
  return (
    <Flex
      bgImg={imageUrl}
      bgPos='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      h={[150, 500]}
      w='100%'
      px={['0', '140px']}
      py={['0', '60px']}
      align={['center', 'flex-end']}
      justifyContent={['center', 'flex-start']}
    >
      <Heading
        fontSize={['2xl', '4xl']}
        color='white.500'
      >
        {name}
      </Heading>
    </Flex>
  );
};