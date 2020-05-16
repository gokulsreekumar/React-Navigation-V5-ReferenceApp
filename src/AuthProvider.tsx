import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';


type User = null | {username:string};

// specify the values prop types in here
// ** use this export to get the Values **
export const AuthContext = React.createContext<{
    // types here
    user: User,
    login: ()=>void,
    logout: ()=>void
}>({
    // defaults here
    user: null,
    login: ()=>{},
    logout: ()=>{}
})

interface AuthProviderProps {

}

// values props is made available to all the children
// use this export to Wrap whichever Component needs wt is provided
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>(null) 
        return (
            <AuthContext.Provider
                value={{
                    user,
                    login: ()=>{
                        const fakeUser = {username:"bob"};
                        setUser(fakeUser);
                        AsyncStorage.setItem("user",JSON.stringify(fakeUser));
                    },
                    logout: ()=>{
                        setUser(null);
                        AsyncStorage.removeItem("user");
                    }   
                }}
            >
                {children}
            </AuthContext.Provider>
        );
}