import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Box, Icon, Pressable} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import {ChevronLeft} from "lucide-react-native";

export default function LeftBackHeader() {
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
                    left: 10,
                    position: "absolute",
                }}
                onPress={onPressX}>
                <Icon as={ChevronLeft} color={COLORS.text} size="xl" />
            </Pressable>
        </Box>
    );
}
