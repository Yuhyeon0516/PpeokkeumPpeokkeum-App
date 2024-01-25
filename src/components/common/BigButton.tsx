import React from "react";
import {COLORS} from "../../global/constant";
import {Button, ButtonText} from "@gluestack-ui/themed";

interface IBigButton {
    onPress: () => void;
    text: string;
}

export default function BigButton({onPress, text}: IBigButton) {
    return (
        <Button
            size="xl"
            bg={COLORS.btn}
            onPress={onPress}
            mt={30}
            w={"100%"}
            h={50}
            borderRadius={8}>
            <ButtonText color={COLORS.text}>{text}</ButtonText>
        </Button>
    );
}
