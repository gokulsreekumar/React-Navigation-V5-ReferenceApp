import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import { CenterStuff } from './CenterStuff';
import { View, Text, Button } from 'react-native';
import { AuthContext } from './AuthProvider';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack } from './HomeStack';


interface AppTabsProps {

}

const Tabs = createBottomTabNavigator<AppParamList>();


function Search(){
    return(
        <CenterStuff>
            <Text>
                Search Screen from bottomTabs 
            </Text>
        </CenterStuff>
    )
}
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
        return (
            <Tabs.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName: string;
      
                  if (route.name === 'Home') {
                    iconName = 'ios-home';
                  } else if (route.name === 'Search') {
                    iconName ='ios-search';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
                <Tabs.Screen name='Home' component={HomeStack}/>
                <Tabs.Screen name='Search' component={Search}/>

            </Tabs.Navigator>
        );
}