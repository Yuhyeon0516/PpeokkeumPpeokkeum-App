import React from "react";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";
import {ToastProvider} from "@gluestack-ui/toast";
import {OverlayProvider} from "@gluestack-ui/overlay";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import HomeStacks from "./src/screens/HomeStacks";
import {RecoilRoot} from "recoil";
import {GoogleSignin} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId:
        "468147056398-fthfm5smjcv98s2lmoa8vhc7ikkdh7gr.apps.googleusercontent.com",
    iosClientId:
        "468147056398-7r1q1is8rd68rc8rtvuil6134j3hu1he.apps.googleusercontent.com",
});

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <SafeAreaProvider>
                <ToastProvider>
                    <OverlayProvider>
                        <NavigationContainer>
                            <RecoilRoot>
                                <HomeStacks />
                            </RecoilRoot>
                        </NavigationContainer>
                    </OverlayProvider>
                </ToastProvider>
            </SafeAreaProvider>
        </GluestackUIProvider>
    );
}

export default App;
