import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import Counter from "./counter";
import ServiceSteps from "./service-steps";
import { useTheme } from "@emotion/react";

export default function ServiceCard() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "16px",
        padding: "24px",
        width: "100%",
      }}
    >
      <CardContent>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h2">Plumbing</Typography>
            <Typography variant="subtitle1">Maintenance</Typography>
          </Box>
          <Box>
            <Counter />
          </Box>
        </Box>
        <ServiceSteps activeStep={0} />
        <ServiceSteps activeStep={1} />
        <ServiceSteps activeStep={2} />
        <ServiceSteps activeStep={3} />
        <ServiceSteps activeStep={3} endStatus="canceled" />
        <Box
          sx={{
            marginTop: "2rem",
            backgroundColor: theme.palette.gray.bg,
            padding: "1.6rem",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h3">Professional Assigned</Typography>
          <Typography variant="body2">
            Professional has been assigned, need to start from professional side
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
