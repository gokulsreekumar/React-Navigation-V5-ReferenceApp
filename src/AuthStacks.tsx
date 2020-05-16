import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList, AuthNavProps } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { CenterStuff } from './CenterStuff';
import { View, Text, Button } from 'react-native';

interface AuthStacksProps {

}
// step 1

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<"Login">) {
    const { login } = useContext(AuthContext)
    return (
        <CenterStuff>
            <Text>I am The Login</Text>
            <Button
                title="Log Me in"
                onPress={() => {
                    login();
                }}
            />
            <Button
                title="To Register"
                onPress={() => {
                    navigation.navigate('Register')
                }}
            />
        </CenterStuff>
    );
}

// navigation is made TypeSafe by passing in its type with two Args for it one of ParamList and other of the Current Screen
function Register({ navigation, route }: AuthNavProps<"Register">) {
    return (
        <CenterStuff>
            <Text>I am The {route.name}</Text>
            <Button
                title="Go To Login"
                onPress={() => {
                    navigation.navigate("Login");
                    // navigation.goBack();
                }}
            />
        </CenterStuff>
    );
}
export const AuthStacks: React.FC<AuthStacksProps> = ({}) => {
        return (
            <Stack.Navigator
            initialRouteName="Login"
            // screenOptions={{header:()=>null}}
            >
            <Stack.Screen
                name="Login"
                options={{
                    headerTitle: "Log In",
                }}
                component={Login}
            />
            <Stack.Screen
                name="Register"
                options={{
                    headerTitle: "Sign Up",
                }}
                component={Register}
            />
        </Stack.Navigator>
        );
}