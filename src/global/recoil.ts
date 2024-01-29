import {atom} from "recoil";

export const registerData = atom({
    key: "REGISERDATA",
    default: {
        email: "",
        password: "",
    },
});
