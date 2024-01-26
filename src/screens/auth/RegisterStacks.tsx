import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RegisterStackParams} from "../../types/types";
import RegisterOneScreen from "./RegisterOneScreen";
import RegisterTwoScreen from "./RegisterTwoScreen";

const Stack = createNativeStackNavigator<RegisterStackParams>();

export default function RegisterStacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="RegisterOne" component={RegisterOneScreen} />
            <Stack.Screen name="RegisterTwo" component={RegisterTwoScreen} />
        </Stack.Navigator>
    );
}
