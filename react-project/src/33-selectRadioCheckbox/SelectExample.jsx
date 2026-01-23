import {
  Select, MenuItem, FormControl, InputLabel
} from "@mui/material";
import { useState } from "react";

export default function SelectExample() {
  const [country, setCountry] = useState("");

  return (
    <FormControl fullWidth>
      <InputLabel>Country</InputLabel>

      <Select
        value={country}
        label="Country"
        onChange={e => setCountry(e.target.value)}
      >
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="usa">USA</MenuItem>
        <MenuItem value="uk">UK</MenuItem>
      </Select>
    </FormControl>
  );
}
