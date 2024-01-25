import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeStackParams} from "../types/types";
import MainStacks from "./main/MainStacks";
import AuthStacks from "./auth/AuthStacks";

const Stack = createNativeStackNavigator<HomeStackParams>();

export default function HomeStacks() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Auth">
            <Stack.Screen name="Auth" component={AuthStacks} />
            <Stack.Screen name="Main" component={MainStacks} />
        </Stack.Navigator>
    );
}
