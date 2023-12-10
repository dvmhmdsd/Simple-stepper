import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Counter({
  start = "Dec 10 2023 10:00:00",
  isCountDown = false,
}) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = isCountDown
      ? Date.parse(start) - Date.now()
      : Date.now() - Date.parse(start);

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <AccessTimeIcon color="info" />
      <Typography
        variant="h3"
        sx={{
          margin: "0 0.6rem",
        }}
      >
        {getDoubleCharStringFromNum(hours)}:
        {getDoubleCharStringFromNum(minutes)}:
        {getDoubleCharStringFromNum(seconds)}
      </Typography>
    </Box>
  );
}

function getDoubleCharStringFromNum(number) {
  if (number <= 0) return "00";
  if (number <= 10) return "0" + number;
  return number;
}
