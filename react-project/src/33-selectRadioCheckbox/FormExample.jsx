import { Button, Stack } from "@mui/material";
import CheckboxExample from "./CheckboxExample";
import RadioExample from "./RadioExample";
import SelectExample from "./SelectExample";

export default function FormExample() {
  return (
    <Stack spacing={2}>
      <CheckboxExample />
      <RadioExample />
      <SelectExample />
      <Button variant="contained">Submit</Button>
    </Stack>
  );
}
