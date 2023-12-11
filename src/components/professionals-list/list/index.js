import React from "react";
import { Box, Radio, Typography } from "@mui/material";
import AvatarComponent from "../../avatar/index";

export default function ListComponent({ list, handleSelectProfessional }) {
  return (
    <>
      {list.map((listItem, index) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem 0",
            cursor: "pointer",
          }}
          key={listItem.name}
          onClick={() => handleSelectProfessional(index)}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <AvatarComponent name={listItem.name} />
            </Box>
            <Box sx={{ margin: "0 0.5rem" }}>
              <Typography variant="h5">{listItem.name}</Typography>
              <Typography variant="body2">{listItem.job}</Typography>
            </Box>
          </Box>
          <Box>
            <Radio
              checked={listItem.selected}
              onChange={(e) => handleSelectProfessional(e.target.value)}
              value={index}
              color="info"
              name="radio-buttons"
            />
          </Box>
        </Box>
      ))}
    </>
  );
}
