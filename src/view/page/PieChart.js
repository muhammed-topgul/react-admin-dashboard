import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const PieChart = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Pie Chart" subtitle="Welcome to your Pie Chart"/>
            </Box>
        </Box>
    );
};

export default PieChart;