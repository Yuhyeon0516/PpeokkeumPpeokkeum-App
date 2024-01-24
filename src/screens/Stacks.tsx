import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ZoneScreen from "./zone/ZoneScreen";
import Tabs from "./Tabs";
import {StackParams} from "../types/types";
import {NavigationProp, useNavigation} from "@react-navigation/native";

const Stack = createNativeStackNavigator<StackParams>();

export default function Stacks() {
    const {navigate} = useNavigation<NavigationProp<StackParams>>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs">
                {props => <Tabs onPress={() => navigate("Zone")} {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name="Zone"
                component={ZoneScreen}
                options={{
                    presentation: "modal",
                }}
            />
        </Stack.Navigator>
    );
}
