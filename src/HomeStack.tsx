import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CenterStuff } from './CenterStuff';
import { Text, Button } from "react-native";
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { AuthProvider, AuthContext } from './AuthProvider';
import faker from 'faker';
import { HomeParamList } from './HomeParamList';

interface HomeStackProps {

}


const Stack = createStackNavigator<HomeParamList>();


function Feed({navigation}:any) {
    return (
        <CenterStuff>
            <FlatList
            style={{width:'100%'}}
                renderItem={({item})=>{
                    return(
                        <Button
                            onPress={()=>{navigation.navigate('Product'), {
                                name: item
                            }}}
                            title={item}
                        />
                    )
                }}
                keyExtractor = {(product, idx)=>product+idx}
                data = {Array.from(Array(50),()=>faker.commerce.product())}
            />
        </CenterStuff>
    )
}

function Product(){
    return(
        <CenterStuff>
            <Text>This is the Product</Text>
        </CenterStuff>
    )
}

// Nesting of this component
// we didnt put this stack inside another Navigator.Container, 
// because this stack is being passed into another Tab.Navigator which already has that
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const { logout } = useContext(AuthContext);
        return (
                <Stack.Navigator>
                    <Stack.Screen name='Feed' component={Feed} options={{
                        headerRight:()=>{
                            return(
                                <TouchableOpacity onPress={()=>logout()}>
                                    <Text>
                                        LogOut
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    }}/>
                    <Stack.Screen name='Product' component={Product} />
                </Stack.Navigator>
        );
}