// To make the Names of List Error Safe using TypeScript

import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type AuthParamList = {
    Login: undefined,
    Register: undefined,
}

// <T> is called a Generic 
export type AuthNavProps <T extends keyof AuthParamList> = {
    navigation:StackNavigationProp<AuthParamList, T>
    route: RouteProp<AuthParamList, T>
}