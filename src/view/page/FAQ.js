import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const FAQ = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="FAQ" subtitle="Welcome to your FAQ"/>
            </Box>
        </Box>
    );
};

export default FAQ;