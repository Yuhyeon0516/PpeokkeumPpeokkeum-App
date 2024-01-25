import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ZoneScreen from "./ZoneScreen";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import MainTabs from "./MainTabs";
import {MainStackParams} from "../../types/types";

const Stack = createNativeStackNavigator<MainStackParams>();

export default function MainStacks() {
    const {navigate} = useNavigation<NavigationProp<MainStackParams>>();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs">
                {props => (
                    <MainTabs onPress={() => navigate("Zone")} {...props} />
                )}
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
