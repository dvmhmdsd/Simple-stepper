import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListComponent from "./list";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: "16px",
};

const btnStyle = {
  minWidth: "35%",
  fontWeight: "700",
  textTransform: "capitalize",
};

const professionals = [
  { name: "Mohamed Salah", job: "Plumber", selected: false },
  { name: "Mohamed Adel", job: "Plumber", selected: false },
  { name: "Mohamed Tarif", job: "Plumber", selected: false },
  { name: "Mohamed Sadik", job: "Plumber", selected: false },
  { name: "Mohamed Ayman", job: "Plumber", selected: false },
];

export default function List() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [list, updateList] = useState(professionals);

  const handleSelectProfessional = (index) => {
    const listClone = [...list];
    listClone.forEach((item) => (item.selected = false));
    listClone[index].selected = true;

    updateList(listClone);
  };

  const handleSearchProfessional = (value) => {
    if (value.length > 0) {
      const listClone = professionals.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      updateList(listClone);
    } else updateList(professionals);
  };

  return (
    <>
      <Button onClick={handleOpen}>View Professionals</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            variant="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">Select Professional</Typography>
            <IconButton sx={{ color: "#000" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ margin: "2rem 0" }}>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                onChange={(e) => handleSearchProfessional(e.target.value)}
                id="outlined-adornment-password"
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <SearchIcon sx={{ fontSize: "36px" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box>
            <ListComponent
              list={list}
              handleSelectProfessional={handleSelectProfessional}
            />
          </Box>
          <Box sx={{ textAlign: "right", margin: "3rem 0 0.5rem" }}>
            <Button
              color="info"
              size="large"
              variant="text"
              sx={btnStyle}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button color="info" variant="contained" size="large" sx={btnStyle}>
              Assign
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
