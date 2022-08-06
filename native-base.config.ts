import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      400: '#313144',
      500: '#1f1f2b'
    },
    secondary: {
      500: '#fed95f'
    }
  },
  fontConfig: {
    Archivo: {
      400: 'Archivo_400Regular',
      500: 'Archivo_500Medium',
      600: 'Archivo_600SemiBold',
      700: 'Archivo_700Bold'
    },
    Inter: {
      400: 'Inter_400Regular',
      500: 'Inter_500Medium',
      600: 'Inter_600SemiBold',
      700: 'Inter_700Bold'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Archivo'
  },
  config: {
    initialColorMode: 'dark'
  }
})