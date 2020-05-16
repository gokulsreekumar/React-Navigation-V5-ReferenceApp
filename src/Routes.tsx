import React, { useState, useEffect, useContext } from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    AsyncStorage,
} from "react-native";
import { CenterStuff } from "./CenterStuff";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext, AuthProvider } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStacks } from "./AuthStacks";
import { HomeDrawer } from "./HomeDrawer";
 
interface RoutesProps {}


// Step 2
// use the syntax of Nesting JSX Elements
// Put Navigation.Conatainer
// Inside that the Kindof of Navigation: stack, bottombar, drawer
// Inside that the different items of navigation
// since we passed Login as a Stack.Screen, it gets the Navigation Prop being passed as default
// making stack nav typesafe
// difference between the *options* in Stack.Navigator and Stack.Screen

// this is the basic reendering/returned item
export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, login } = useContext(AuthContext);

    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        // check once is user is logged in or not
        AsyncStorage.getItem("user")
            .then((userString) => {
                if(userString){
                    // decode it
                    login();
                } 
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    if (loading) {
        return (
            <CenterStuff>
                <ActivityIndicator size="large" />
            </CenterStuff>
        );
    }

    return (
        <NavigationContainer>
            {user ? (
                <HomeDrawer/>
            ) : (
                <AuthStacks/>
            )}
        </NavigationContainer>
    );
};
