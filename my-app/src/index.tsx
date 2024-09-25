import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackNavigation from './navigation/rootStackNavigation';

const theme = createTheme({
  lightColors: {
    primary: '#0066ff',
    background: '#315659',
  },
  darkColors: {
    primary: 'blue',
    background: '#121212',
  },
  components: {
    Button: {
      color: '#ffbc42',
    },
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootStackNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
