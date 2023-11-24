import React, { useContext, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import "./style.css";
import { SearchContext } from "../../../search-context";

export default function Search({ sx }) {
  const [focused, setFocused] = useState(false);
  const { setSearchText } = useContext(SearchContext);
  const theme = useTheme();

  return (
    <FormControl
      style={{ border: "2px solid", borderRadius: "6px", width: "45%" }}
      variant="outlined"
      sx={sx}
    >
      {!focused && (
        <InputLabel
          style={{
            color: "white",
            fontFamily: "inherit",
            fontSize: `${theme.typography.fontSize.sm}px`,
            transform: "translate(14px, 10px) scale(1)",
          }}
          htmlFor="outlined-adornment-search"
        >
          What do you want to watch?
        </InputLabel>
      )}
      <OutlinedInput
        id="outlined-adornment-search"
        type="search"
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.target.value.trim()) setFocused(false);
        }}
        onChange={(e) => setSearchText(e.target.value.trim())}
        style={{ color: "white" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchIcon
                style={{
                  color: "white",
                  fontSize: `${theme.typography.fontSize.lg}px`,
                }}
              />
            </IconButton>
          </InputAdornment>
        }
        label="What do you want to watch?"
      />
    </FormControl>
  );
}
