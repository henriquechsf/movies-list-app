import React from 'react';
import { Box, NativeBaseProvider, Text } from 'native-base';
import { theme } from '../native-base.config';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box safeArea flex={1} backgroundColor="primary.500">
        <Text color="secondary.500">Hello app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
