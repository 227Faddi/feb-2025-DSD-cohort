import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";

const ComplaintDetails = () => {
  // Id took from the URL parameters, used to fetch the specific items
  const { id } = useParams();

  return (
    <Box>
      <Typography
        component="h1"
        align="left"
        sx={{ fontWeight: "bold", fontSize: "2rem" }}
      >
        Complaint Details for: {id}
      </Typography>
    </Box>
  );
};

export default ComplaintDetails;
