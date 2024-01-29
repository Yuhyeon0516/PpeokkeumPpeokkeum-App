import auth from "@react-native-firebase/auth";

export async function registerEmailAndPassword(
    email: string,
    password: string,
) {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    //TODO: 닉네임, 이름 업데이트

    return user;
}
