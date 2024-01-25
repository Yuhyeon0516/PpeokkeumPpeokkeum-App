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
import React, {useState} from "react";
import RightCloseHeader from "../../components/headers/RightCloseHeader";
import {Lock, UserRound} from "lucide-react-native";
import {COLORS} from "../../global/constant";
import GoogleButton from "../../components/auth/GoogleButton";
import BigButton from "../../components/common/BigButton";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onPressLogin() {}

    function onPressGoogleLogin() {}

    return (
        <Box flex={1} bg={COLORS.bg}>
            <RightCloseHeader />
            <Box px={20}>
                <Box>
                    <Heading color={COLORS.text} fontWeight="900" fontSize={24}>
                        뻐끔뻐끔에 로그인하기
                    </Heading>
                </Box>

                <VStack space="xs" my={20}>
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

                <VStack space="xs">
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

                <BigButton onPress={onPressLogin} text="로그인" />

                <GoogleButton
                    onPress={onPressGoogleLogin}
                    text="구글 계정으로 로그인"
                />
            </Box>
        </Box>
    );
}
