import React, {useState} from "react";
import {Box, Heading, Text, VStack} from "@gluestack-ui/themed";
import {COLORS} from "../../global/constant";
import LeftBackHeader from "../../components/headers/LeftBackHeader";
import BigButton from "../../components/common/BigButton";
import TextInputCom from "../../components/common/TextInputCom";
import {UserRound, VenetianMask} from "lucide-react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {HomeStackParams} from "../../types/types";

export default function RegisterTwoScreen() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const {navigate} = useNavigation<NavigationProp<HomeStackParams>>();

    function onPressRegister() {
        navigate("Main");
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
                        뻐끔뻐끔 내에서 활용할 이름과 닉네임을 입력해주세요.
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
                    placeholder="앱에서 사용할 닉네임을 입력해주세요."
                    icon={VenetianMask}
                />

                <BigButton onPress={onPressRegister} text="회원가입 완료" />
            </Box>
        </Box>
    );
}
