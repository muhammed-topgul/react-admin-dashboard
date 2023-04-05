import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const Geography = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Geography" subtitle="Welcome to your geography"/>
            </Box>
        </Box>
    );
};

export default Geography;