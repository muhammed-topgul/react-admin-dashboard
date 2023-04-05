import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const BarChart = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Bar Chart" subtitle="Welcome to your Bar Chart"/>
            </Box>
        </Box>
    );
};

export default BarChart;