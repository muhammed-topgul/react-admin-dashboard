import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const Contact = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Contact" subtitle="Welcome to your contact"/>
            </Box>
        </Box>
    );
};

export default Contact;