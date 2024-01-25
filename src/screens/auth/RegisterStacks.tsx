import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {RegisterStackParams} from "../../types/types";
import RegisterScreen from "./RegisterScreen";
import CertificationScreen from "./CertificationScreen";

const Stack = createNativeStackNavigator<RegisterStackParams>();

export default function RegisterStacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
                name="Certification"
                component={CertificationScreen}
            />
        </Stack.Navigator>
    );
}
