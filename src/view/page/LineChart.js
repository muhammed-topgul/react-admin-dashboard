import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const LineChart = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Line Chart" subtitle="Welcome to your Line Chart"/>
            </Box>
        </Box>
    );
};

export default LineChart;