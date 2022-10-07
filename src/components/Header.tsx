import { Box, Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

interface HeaderProps {
  showBackButton?: boolean;
};

export function Header ({ showBackButton }: HeaderProps) {
  const iconSize = useBreakpointValue({
    base: '1rem',
    lg: '1.5rem'
  });

  return (
    <Box as='header' h={['50px', '100px']}>
      <Flex py={['15px', '25px']} justify='center'>
        {showBackButton && (
          <Link href='/'>
            <Box
              position='absolute'
              left={['16px', '140px']}
              top={['18px', '38px']}
              w='44px'
            >
              <BsChevronLeft size={iconSize}/>
            </Box>
          </Link>
        )}
        <Image src='/images/logo.svg' h={['20px', 'auto']}/>
      </Flex>
    </Box>
  );
}

