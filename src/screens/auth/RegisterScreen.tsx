import React, {useState} from "react";
import RightCloseHeader from "../../components/headers/RightCloseHeader";
import {
    Box,
    Heading,
    Input,
    InputField,
    InputIcon,
    InputSlot,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import GoogleButton from "../../components/auth/GoogleButton";
import {Lock, UserRound} from "lucide-react-native";
import BigButton from "../../components/common/BigButton";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RegisterStackParams} from "../../types/types";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const {navigate} = useNavigation<NavigationProp<RegisterStackParams>>();

    function onPressNext() {
        navigate("Certification");
    }

    function onPressGoogleRegister() {}

    return (
        <Box flex={1} bg={COLORS.bg}>
            <RightCloseHeader />
            <Box px={20}>
                <Box>
                    <Heading color={COLORS.text} fontWeight="900" fontSize={24}>
                        뻐끔뻐끔에 회원가입하기
                    </Heading>
                </Box>

                <VStack space="xs" mt={20}>
                    <Text color={COLORS.text}>이메일</Text>

                    <Input size="lg" borderColor={COLORS.btn}>
                        <InputSlot pl="$3">
                            <InputIcon
                                as={UserRound}
                                color={email ? COLORS.text : COLORS.btn}
                            />
                        </InputSlot>
                        <InputField
                            cursorColor={COLORS.btn}
                            placeholder="이메일을 입력해주세요."
                            keyboardType="email-address"
                            p={0}
                            color={COLORS.text}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </Input>
                </VStack>

                <VStack space="xs" my={20}>
                    <Text color={COLORS.text}>비밀번호</Text>

                    <Input size="lg" borderColor={COLORS.btn}>
                        <InputSlot pl="$3">
                            <InputIcon
                                as={Lock}
                                color={password ? COLORS.text : COLORS.btn}
                            />
                        </InputSlot>
                        <InputField
                            cursorColor={COLORS.btn}
                            placeholder="비밀번호를 입력해주세요."
                            secureTextEntry
                            p={0}
                            color={COLORS.text}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Input>
                </VStack>

                <VStack space="xs">
                    <Text color={COLORS.text}>비밀번호 확인</Text>

                    <Input size="lg" borderColor={COLORS.btn}>
                        <InputSlot pl="$3">
                            <InputIcon
                                as={Lock}
                                color={
                                    passwordConfirm ? COLORS.text : COLORS.btn
                                }
                            />
                        </InputSlot>
                        <InputField
                            cursorColor={COLORS.btn}
                            placeholder="비밀번호를 한번 더 입력해주세요."
                            secureTextEntry
                            p={0}
                            color={COLORS.text}
                            autoCapitalize="none"
                            value={passwordConfirm}
                            onChangeText={setPasswordConfirm}
                        />
                    </Input>
                </VStack>

                <BigButton onPress={onPressNext} text="다음" />

                <GoogleButton
                    onPress={onPressGoogleRegister}
                    text="구글 계정으로 회원가입"
                />
            </Box>
        </Box>
    );
}
