import React, {useState} from "react";
import {Box, Heading, Text, VStack} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import LeftBackHeader from "../../components/headers/LeftBackHeader";
import BigButton from "../../components/common/BigButton";
import TextInputCom from "../../components/common/TextInputCom";
import {UserRound, VenetianMask} from "lucide-react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {AuthStackParams, HomeStackParams} from "../../types/types";
import {registerEmailAndPassword} from "../../global/firebase";
import {Alert} from "react-native";
import {useRecoilValue} from "recoil";
import {registerData} from "../../global/recoil";

export default function RegisterTwoScreen() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const navigation = useNavigation<NavigationProp<HomeStackParams>>();
    const {navigate} = useNavigation<NavigationProp<AuthStackParams>>();
    const registerDataValue = useRecoilValue(registerData);

    async function onPressRegister() {
        try {
            await registerEmailAndPassword(
                registerDataValue.email,
                registerDataValue.password,
            );
            navigate("AuthMain");
            setTimeout(() => {
                navigation.navigate("Main");
                navigation.reset({
                    index: 1,
                    routes: [{name: "Main"}],
                });
            }, 300);
        } catch (error: any) {
            if (error.code === "auth/invalid-email") {
                Alert.alert("이메일 형식을 다시 확인해주세요.");
            } else if (error.code === "auth/email-already-in-use") {
                Alert.alert("이미 가입된 이메일입니다.");
            } else if (error.code === "auth/weak-password") {
                Alert.alert("비밀번호는 6글자 이상이어야 합니다.");
            }
        }
    }

    return (
        <Box flex={1} bg={COLORS.bg}>
            <LeftBackHeader />
            <Box px={20}>
                <VStack space="sm">
                    <Heading color={COLORS.text} fontWeight="900" fontSize={24}>
                        뻐끔뻐끔에 내 정보 알려주기
                    </Heading>
                    <Text color={COLORS.text}>
                        뻐끔뻐끔 내에서 사용할 이름과 닉네임을 입력해주세요.
                    </Text>
                </VStack>

                <TextInputCom
                    value={name}
                    onChangeText={setName}
                    title="이름"
                    placeholder="이름을 입력해주세요."
                    icon={UserRound}
                />

                <TextInputCom
                    value={nickname}
                    onChangeText={setNickname}
                    title="닉네임"
                    placeholder="닉네임을 입력해주세요."
                    icon={VenetianMask}
                />

                <BigButton onPress={onPressRegister} text="회원가입 완료" />
            </Box>
        </Box>
    );
}
