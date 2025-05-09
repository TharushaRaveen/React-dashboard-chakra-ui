import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: '#E6F2FF',
      100: '#BFDFFF',
      200: '#99CCFF',
      300: '#66B2FF',
      400: '#3399FF',
      500: '#0080FF',
      600: '#0066CC',
      700: '#004D99',
      800: '#003366',
      900: '#001A33',
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'md',
      },
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
      },
    }),
  },
});

export default theme;