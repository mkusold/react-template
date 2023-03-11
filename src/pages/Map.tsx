import React from "react";
import {Box, Typography} from "@mui/material";
import { Base } from "./base";
import { useSearchParams } from "react-router-dom";

const params = {
    center: 'center',
}
export const Map = () => {
    let [searchParams] = useSearchParams();
    const center = searchParams.get(params.center);
    return (
        <Base>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h3">Map {center ? `centered on ${center}` : ''}</Typography>
            </Box>
        </Base>
    );
};