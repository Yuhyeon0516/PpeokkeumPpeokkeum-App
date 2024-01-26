import {KeyboardTypeOptions} from "react-native";
import React from "react";
import {
    Input,
    InputField,
    InputIcon,
    InputSlot,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import {LucideIcon} from "lucide-react-native";

interface ITextInputComponent {
    title: string;
    value: string;
    placeholder: string;
    onChangeText: React.Dispatch<React.SetStateAction<string>>;
    keyboardType?: KeyboardTypeOptions;
    icon: LucideIcon;
    secureTextEntry?: boolean;
}

export default function TextInputCom({
    title,
    value,
    placeholder,
    onChangeText,
    keyboardType = "default",
    icon,
    secureTextEntry = false,
}: ITextInputComponent) {
    return (
        <VStack space="xs" mt={20}>
            <Text color={COLORS.text}>{title}</Text>

            <Input size="lg" borderColor={COLORS.btn}>
                <InputSlot pl="$3">
                    <InputIcon
                        as={icon}
                        color={value ? COLORS.text : COLORS.btn}
                    />
                </InputSlot>
                <InputField
                    cursorColor={COLORS.btn}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    p={0}
                    secureTextEntry={secureTextEntry}
                    color={COLORS.text}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}
                />
            </Input>
        </VStack>
    );
}
