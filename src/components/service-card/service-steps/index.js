import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

const StepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#EBF0F1",
  zIndex: 1,
  color: "rgba(0, 0, 0, 0.3)",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  margin: "0 1rem",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    color: "#008EA5",
  }),
  ...(ownerState.completed && {
    color: "#008EA5",
  }),
}));
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
    left: "calc(-50%)",
    right: "calc(50%)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#FFC225",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#FFC225",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export default function CustomizedSteppers({
  activeStep = 3,
  endStatus = "completed",
}) {
  const [isLastStep, setIsLastStep] = useState(false);
  const steps = [
    { label: "Request Created", info: "09 Dec,10 AM" },
    { label: "Assigning" },
    { label: "Start" },
    { label: endStatus === "canceled" ? "Canceled" : "Closed" },
  ];

  useEffect(() => {
    if (activeStep === 3) setIsLastStep(true);
    else setIsLastStep(false);
  }, [activeStep]);
  const theme = useTheme();

  function StepIcon({ active, completed, className, icon }) {
    const icons = {
      1: <InsertDriveFileOutlinedIcon />,
      2: <ManageAccountsOutlinedIcon />,
      3: <TimerOutlinedIcon />,
      4:
        endStatus === "canceled" ? (
          <CloseIcon sx={{ color: "#fff" }} />
        ) : (
          <CheckOutlinedIcon sx={{ color: "#fff" }} />
        ),
    };

    const getBgColorForLastStep = () => {
      if (active && isLastStep) {
        if (endStatus === "canceled") {
          return theme.palette.error.main;
        } else {
          return theme.palette.success.main;
        }
      }
    };

    return (
      <StepIconRoot
        ownerState={{ completed, active }}
        className={className}
        sx={{
          backgroundColor: getBgColorForLastStep(),
        }}
      >
        {icons[String(icon)]}
      </StepIconRoot>
    );
  }

  return (
    <Stepper
      sx={{ marginTop: "1.5rem" }}
      alternativeLabel
      activeStep={activeStep}
      connector={<QontoConnector />}
    >
      {steps.map(({ label, info }, index) => (
        <Step key={label}>
          <StepLabel StepIconComponent={StepIcon}>
            {info && <Typography variant="subtitle2">{info}</Typography>}
            <Typography variant="body2">{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
