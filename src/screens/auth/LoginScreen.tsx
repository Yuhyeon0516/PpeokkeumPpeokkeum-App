import {Box, Heading} from "@gluestack-ui/themed";
import React, {useState} from "react";
import RightCloseHeader from "../../components/headers/RightCloseHeader";
import {Lock, Mail} from "lucide-react-native";
import {COLORS} from "../../global/constant";
import GoogleButton from "../../components/auth/GoogleButton";
import BigButton from "../../components/common/BigButton";
import TextInputCom from "../../components/common/TextInputCom";

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

                <TextInputCom
                    value={email}
                    onChangeText={setEmail}
                    placeholder="이메일을 입력해주세요."
                    title="이메일"
                    keyboardType="email-address"
                    icon={Mail}
                />

                <TextInputCom
                    value={password}
                    onChangeText={setPassword}
                    placeholder="비밀번호를 입력해주세요."
                    title="비밀번호"
                    icon={Lock}
                    secureTextEntry
                />

                <BigButton onPress={onPressLogin} text="로그인" />

                <GoogleButton
                    onPress={onPressGoogleLogin}
                    text="구글 계정으로 로그인"
                />
            </Box>
        </Box>
    );
}
