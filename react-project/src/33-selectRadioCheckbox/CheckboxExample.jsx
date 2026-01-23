import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      label="Accept Terms"
      control={
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      }
    />
  );
}
