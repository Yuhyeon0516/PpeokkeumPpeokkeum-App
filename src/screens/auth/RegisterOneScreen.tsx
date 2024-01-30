import React, {useState} from "react";
import RightCloseHeader from "../../components/headers/RightCloseHeader";
import {Box, Heading, Text, VStack} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import GoogleButton from "../../components/auth/GoogleButton";
import {Lock, Mail} from "lucide-react-native";
import BigButton from "../../components/common/BigButton";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RegisterStackParams} from "../../types/types";
import TextInputCom from "../../components/common/TextInputCom";
import {Alert} from "react-native";
import {useSetRecoilState} from "recoil";
import {registerData} from "../../global/recoil";
import {googleSignin} from "../../global/firebase";

export default function RegisterOneScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const {navigate} = useNavigation<NavigationProp<RegisterStackParams>>();
    const setRegisterData = useSetRecoilState(registerData);

    function onPressNext() {
        //TODO: 닉네임 이름 업데이트
        if (password !== passwordConfirm) {
            Alert.alert("패스워드가 일치하지 않습니다.");
            return;
        }

        if (password.length >= 6) {
            Alert.alert("비밀번호는 6글자 이상이어야 합니다.");
            return;
        }
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailRegex.test(email)) {
            Alert.alert("이메일 형식을 다시 확인해주세요.");
            return;
        }

        setRegisterData({
            email,
            password,
        });

        navigate("RegisterTwo");
    }

    async function onPressGoogleRegister() {
        //TODO: 닉네임 이름 업데이트
        try {
            const user = await googleSignin();
            navigate("RegisterTwo", {uid: user.uid});
        } catch (error: any) {}
    }

    return (
        <Box flex={1} bg={COLORS.bg}>
            <RightCloseHeader />
            <Box px={20}>
                <VStack space="sm">
                    <Heading color={COLORS.text} fontWeight="900" fontSize={24}>
                        뻐끔뻐끔에 회원가입하기
                    </Heading>
                    <Text color={COLORS.text}>
                        뻐끔뻐끔은 올바른 흡연문화 정착을 위해 흡연구역 내에서만
                        흡연을 하는 올바른 문화를 만들기 위해 제작되었습니다.
                    </Text>
                </VStack>

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

                <TextInputCom
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    title="비밀번호 확인"
                    icon={Lock}
                    secureTextEntry
                />

                <BigButton onPress={onPressNext} text="다음" />

                <GoogleButton
                    onPress={onPressGoogleRegister}
                    text="구글 계정으로 가입하기"
                />
            </Box>
        </Box>
    );
}
