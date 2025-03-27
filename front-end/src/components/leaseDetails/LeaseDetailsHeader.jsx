import { Box, Typography, Grid2 } from "@mui/material";

const LeaseDetailsHeader = ({ status }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: 1,
        p: 2,
        borderRadius: "5px 5px 0px 0px",
        bgcolor: "#108C21",
      }}
    >
      <Typography>Lease Summary</Typography>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <p>Status: {status}</p>
      </Grid2>
    </Box>
  );
};

export default LeaseDetailsHeader;
