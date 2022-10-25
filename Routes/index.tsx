import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Ranking } from '../screens/Ranking';
import { WIki } from '../screens/WIki';
import { Account } from '../screens/Account';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="WIki" component={WIki} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}