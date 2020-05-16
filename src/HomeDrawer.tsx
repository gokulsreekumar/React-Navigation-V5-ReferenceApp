import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabs } from './AppTabs';
import { CenterStuff } from './CenterStuff';
import { Text } from 'react-native';

interface HomeDrawerProps {}

const Drawer = createDrawerNavigator();

function ProfileScreen(){
    return(
        <CenterStuff>
            <Text>
                Profile Stack Can be Set up here
            </Text>
        </CenterStuff>
    )
}

export const HomeDrawer: React.FC<HomeDrawerProps> = ({}) => {
        return (
            <Drawer.Navigator >
                <Drawer.Screen options={{
                    
                }} name='Home' component={AppTabs}/>
                <Drawer.Screen name='Profile' component={ProfileScreen}/>
            </Drawer.Navigator>
        );
}