import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#000',
      500: '#47585B',
      100: '#999999',
    },
    yellow: {
      500: '#FFBA08',
      50: '#FFBA0880'
    },
    white: {
      900: '#FFF',
      500: '#F5F8FA',
      100: '#DADADA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.500',
        color: 'gray.500'
      }
    }
  }
});
