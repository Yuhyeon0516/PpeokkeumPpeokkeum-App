import {Box} from "@gluestack-ui/themed";
import React from "react";
import {COLORS} from "../../global/constant";
import RightCloseHeader from "../../components/headers/RightCloseHeader";

export default function CertificationScreen() {
    return (
        <Box flex={1} bg={COLORS.bg}>
            <RightCloseHeader />
        </Box>
    );
}
