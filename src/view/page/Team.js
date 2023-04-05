import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const Team = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Team" subtitle="Welcome to your team"/>
            </Box>
        </Box>
    );
};

export default Team;