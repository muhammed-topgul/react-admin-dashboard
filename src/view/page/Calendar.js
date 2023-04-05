import React from 'react';
import {Box} from "@mui/material";
import Header from "../component/Header";

const Calendar = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="Calendar" subtitle="Welcome to your calendar"/>
            </Box>
        </Box>
    );
};

export default Calendar;