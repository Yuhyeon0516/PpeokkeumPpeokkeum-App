import auth from "@react-native-firebase/auth";
import {GoogleSignin} from "@react-native-google-signin/google-signin";

export async function registerEmailAndPassword(
    email: string,
    password: string,
) {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    //TODO: 닉네임, 이름 업데이트

    return user;
}

export async function googleSignin() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const {user} = await auth().signInWithCredential(googleCredential);

    return user;
}
