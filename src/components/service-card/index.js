import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import Counter from "./counter";
import ServiceSteps from "./service-steps";
import { useTheme } from "@emotion/react";

export default function ServiceCard({ service, steps, status }) {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    steps.forEach((step, index) => {
      if (step.name === status.shortName) setActiveStep(index);
    });
  });

  const theme = useTheme();
  const getBgColorAccordingToStatus = () => {
    switch (status.shortName) {
      case "started":
        return theme.palette.warning.bg;
      case "closed":
        return "#EDFAF4";
      case "cancelled":
        return "#FFE5E5";
      default:
        return theme.palette.gray.bg;
    }
  };
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
            <Typography variant="h2">{service.title}</Typography>
            <Typography variant="subtitle1">{service.name}</Typography>
          </Box>
          <Box>
            <Counter />
          </Box>
        </Box>
        <ServiceSteps
          steps={steps}
          activeStep={activeStep}
          status={status.shortName}
        />
        <Box
          sx={{
            marginTop: "2rem",
            backgroundColor: getBgColorAccordingToStatus(),
            padding: "1.6rem",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h3">{status.title}</Typography>
          <Typography variant="body2">{status.body}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
