import {View} from "react-native";
import React from "react";
import {Heading} from "@gluestack-ui/themed";

export default function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Heading>홈 스크린</Heading>
        </View>
    );
}
