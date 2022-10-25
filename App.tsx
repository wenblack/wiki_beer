import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Account } from './screens/Account';
import { BeerScreen } from './screens/BeerScreen';
import { Home } from './screens/Home';
import { Ranking } from './screens/Ranking';
import { SearchResult } from './screens/SearchResult';
import { WIki } from './screens/WIki';


export default function App() {
  return (
    <View >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Home />
      <Ranking />
      <SearchResult />
      <WIki />
      <Account />
      <BeerScreen />
    </View>
  );
}

