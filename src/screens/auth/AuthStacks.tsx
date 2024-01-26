import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {AuthStackParams} from "../../types/types";
import MainScreen from "./MainScreen";
import LoginScreen from "./LoginScreen";
import RegisterStacks from "./RegisterStacks";

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthStacks() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="AuthMain">
            <Stack.Screen name="AuthMain" component={MainScreen} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{presentation: "modal"}}
            />
            <Stack.Screen
                name="RegisterStack"
                component={RegisterStacks}
                options={{presentation: "modal"}}
            />
        </Stack.Navigator>
    );
}
