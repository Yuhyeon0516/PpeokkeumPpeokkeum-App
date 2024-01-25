import {Box, Icon} from "@gluestack-ui/themed";
import {useNavigation} from "@react-navigation/native";
import {X} from "lucide-react-native";
import React from "react";
import {Pressable} from "react-native";
import {COLORS} from "../../global/constant";

export default function RightCloseHeader() {
    const {goBack} = useNavigation();

    function onPressX() {
        goBack();
    }

    return (
        <Box
            w={"100%"}
            h={70}
            px={10}
            position="relative"
            justifyContent="center">
            <Pressable
                style={{
                    padding: 10,
                    right: 10,
                    position: "absolute",
                }}
                onPress={onPressX}>
                <Icon as={X} color={COLORS.text} size="xl" />
            </Pressable>
        </Box>
    );
}
