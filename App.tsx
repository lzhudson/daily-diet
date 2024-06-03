import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}

