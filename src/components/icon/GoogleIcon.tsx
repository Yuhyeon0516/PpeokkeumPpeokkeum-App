import {createIcon} from "@gluestack-ui/themed";
import React from "react";
import {G, Path} from "react-native-svg";

const GoogleIcon = createIcon({
    // createIcon function is imported from '@gluestack-ui/themed'
    viewBox: "0 0 24 24",
    path: (
        <>
            <G clipPath="url(#clip0_1_2198)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.52 12.2727C23.52 11.4218 23.4436 10.6036 23.3018 9.81818H12V14.46H18.4582C18.18 15.96 17.3345 17.2309 16.0636 18.0818V21.0927H19.9418C22.2109 19.0036 23.52 15.9273 23.52 12.2727Z"
                    fill="#4285F4"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 24C15.24 24 17.9564 22.9254 19.9418 21.0927L16.0636 18.0818C14.9891 18.8018 13.6145 19.2272 12 19.2272C8.87455 19.2272 6.22909 17.1163 5.28546 14.28H1.27637V17.3891C3.25091 21.3109 7.30909 24 12 24Z"
                    fill="#34A853"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.28545 14.28C5.04545 13.56 4.90909 12.7909 4.90909 12C4.90909 11.2091 5.04545 10.44 5.28545 9.71999V6.6109H1.27636C0.463636 8.2309 0 10.0636 0 12C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.28Z"
                    fill="#FBBC05"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z"
                    fill="#EA4335"
                />
            </G>
        </>
    ),
});

export default GoogleIcon;
