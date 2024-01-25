import React from "react";
import {Button, ButtonText, Heading, VStack} from "@gluestack-ui/themed";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {AuthStackParams} from "../../types/types";
import LottieView from "lottie-react-native";
import {useWindowDimensions} from "react-native";

export default function MainScreen() {
    const {navigate} = useNavigation<NavigationProp<AuthStackParams>>();
    const {width} = useWindowDimensions();

    function onPressLoginButton() {
        navigate("Login");
    }

    function onPressRegisterButton() {
        navigate("Register");
    }

    return (
        <VStack
            flex={1}
            bg="whitesmoke"
            alignItems="center"
            justifyContent="center">
            <LottieView
                source={require("../../assets/lotties/smoking.json")}
                style={{width: width * 0.7, height: width * 0.7}}
                autoPlay
                loop
            />
            <Heading
                color="black"
                size="2xl"
                fontWeight="900"
                top={(width * -0.7) / 6}>
                뻐끔뻐끔
            </Heading>

            <Button
                size="xl"
                bg="#8A7E74"
                onPress={onPressLoginButton}
                mb={20}
                w={"35%"}>
                <ButtonText>로그인</ButtonText>
            </Button>
            <Button
                size="xl"
                bg="#8A7E74"
                onPress={onPressRegisterButton}
                w={"35%"}>
                <ButtonText>회원가입</ButtonText>
            </Button>
        </VStack>
    );
}
