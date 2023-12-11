import React from "react";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@emotion/react";

export default function AvatarComponent({ name }) {
  const getAvatarString = () => {
    if (name) return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  };
  const theme = useTheme();
  return (
    <Avatar sx={{ backgroundColor: theme.palette.info.main }}>
      {getAvatarString()}
    </Avatar>
  );
}
