import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {AuthStackParams} from "../../types/types";
import MainScreen from "./MainScreen";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthStacks() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{presentation: "modal"}}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{presentation: "modal"}}
            />
        </Stack.Navigator>
    );
}
