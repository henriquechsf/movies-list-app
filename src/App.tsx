import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Hello app!</Text>
    </SafeAreaView>
  );
}
