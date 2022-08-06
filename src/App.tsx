import React from 'react';
import { Box, NativeBaseProvider, Text } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} backgroundColor="#121212">
        <Text color="#ffffff">Hello app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
