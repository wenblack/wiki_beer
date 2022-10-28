import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

import { HomePage } from "../screens/HomePage";
import { Ranking } from "../screens/Ranking";
import { WIki } from "../screens/WIki";
import { Account } from "../screens/Account";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FEAE00",
            height: 50,
          },
          tabBarIconStyle: {
            color: "#fff",
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "HomePage") {
              return <Octicons name="home" size={32} color={color} />;
            } else if (route.name === "Ranking") {
              return <AntDesign name="Trophy" size={32} color={color} />;
            } else if (route.name === "WIki") {
              return <FontAwesome5 name="newspaper" size={32} color={color} />;
            } else if (route.name === "Account") {
              return <Feather name='user' size={32} color={color} />;
            }
          },
          tabBarInactiveTintColor: "#202024",
          tabBarActiveTintColor: "#fff",
        })}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={Ranking}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="WIki"
          component={WIki}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}