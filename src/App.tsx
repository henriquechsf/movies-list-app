import { NavigationContainer } from '@react-navigation/native';

import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold, useFonts as useArchivoFonts } from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts as useInterFonts } from '@expo-google-fonts/inter';

import { Box, NativeBaseProvider, Text } from 'native-base';
import { theme } from '../native-base.config';
import Home from './pages/Home';
import Details from './pages/Details';
import Routes from './routes';
import SignIn from './pages/SignIn';

export default function App() {
  const [archivoFontsLoaded] = useArchivoFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold
  });
  const [interFontsLoaded] = useArchivoFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (archivoFontsLoaded && interFontsLoaded) {
    return (
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Box safeArea flex={1} backgroundColor="primary.500">
            {/* <Routes /> */}
            <SignIn />
          </Box>
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }

  return <></>;
}
