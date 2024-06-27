import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Home } from '@screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

