/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon, Pressable, Text} from "@gluestack-ui/themed";
import {Cog, Home} from "lucide-react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import HomeScreen from "./HomeScreen";
import EmptyScreen from "../empty/EmptyScreen";
import SettingScreen from "./SettingScreen";

const Tabs = createBottomTabNavigator();

export default function MainTabs({onPress}: {onPress: () => void}) {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70 + safeAreaInsets.bottom,
                },
            }}>
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon
                            as={Home}
                            color={focused ? "#594D45" : "$trueGray300"}
                            size="xl"
                        />
                    ),
                    tabBarLabel: ({focused}) => (
                        <Text
                            color={focused ? "#594D45" : "$trueGray300"}
                            fontSize={16}
                            fontWeight="bold">
                            홈
                        </Text>
                    ),
                }}
            />
            <Tabs.Screen
                name="Empty"
                component={EmptyScreen}
                options={{
                    tabBarIcon: () => null,
                    tabBarLabel: () => null,
                    tabBarButton: () => (
                        <Pressable
                            width={90}
                            height={90}
                            bg="#726457"
                            borderRadius={30}
                            top={-40}
                            onPress={onPress}
                            padding={10}>
                            <LottieView
                                source={require("../../assets/lotties/cigarette.json")}
                                style={{flex: 1}}
                                autoPlay
                                loop
                            />
                        </Pressable>
                    ),
                }}
            />
            <Tabs.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon
                            as={Cog}
                            color={focused ? "#594D45" : "$trueGray300"}
                            size="xl"
                        />
                    ),
                    tabBarLabel: ({focused}) => (
                        <Text
                            color={focused ? "#594D45" : "$trueGray300"}
                            fontSize={16}
                            fontWeight="bold">
                            설정
                        </Text>
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
