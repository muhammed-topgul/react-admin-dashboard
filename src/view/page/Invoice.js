import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const Invoice = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Invoice" subtitle="Welcome to your invoice"/>
            </Box>
        </Box>
    );
};

export default Invoice;