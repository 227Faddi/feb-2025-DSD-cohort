import { Box, Typography, Divider } from "@mui/material";
import React from "react";

const Details = ({ apartmentData }) => {

    const {
        floorPlanName,
        squareFootage,
        bedrooms,
        bathrooms,
        floor,
    } = apartmentData;


    return (
        <Box
          sx={{
            border: "3px solid #ccc",
            borderRadius: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            flex: 1,
            overflow: "hidden"
          }}
        >
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                Details
            </Typography>

            <Divider sx={{my: 2}}/>

            <Typography variant="h4">Layout: {floorPlanName}</Typography>
            <Typography variant="h4">Sq. Ft: {squareFootage}</Typography>
            <Typography variant="h4">Beds: {bedrooms}</Typography>
            <Typography variant="h4">Baths: {bathrooms}</Typography>
            <Typography variant="h4">Floor: {floor}</Typography>
        </Box>
    )
}

export default Details;