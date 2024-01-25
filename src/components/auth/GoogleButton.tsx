import {Button, ButtonIcon, ButtonText} from "@gluestack-ui/themed";
import React from "react";
import {COLORS} from "../../global/constant";
import GoogleIcon from "../icon/GoogleIcon";

interface IGoogleButton {
    onPress: () => void;
    text: string;
}

export default function GoogleButton({onPress, text}: IGoogleButton) {
    return (
        <Button
            size="xl"
            bg={COLORS.white}
            onPress={onPress}
            mt={20}
            w={"100%"}
            h={50}
            borderRadius={8}
            alignItems="center"
            position="relative">
            <ButtonIcon as={GoogleIcon} position="absolute" left={20} />
            <ButtonText color={COLORS.black}>{text}</ButtonText>
        </Button>
    );
}
