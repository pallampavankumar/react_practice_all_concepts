import {
  Radio, RadioGroup,
  FormControlLabel, FormLabel
} from "@mui/material";
import { useState } from "react";

export default function RadioExample() {
  const [gender, setGender] = useState("male");

  return (
    <>
      <FormLabel>Gender</FormLabel>

      <RadioGroup
        value={gender}
        onChange={e => setGender(e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </>
  );
}
