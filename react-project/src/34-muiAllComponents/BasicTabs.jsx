import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

export default function BasicTabs() {

  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 400 }}>
      <Tabs value={value} onChange={(e, v) => setValue(v)}>
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Settings" />
      </Tabs>

      {value === 0 && <Typography sx={{ mt: 2 }}>Home Content</Typography>}
      {value === 1 && <Typography sx={{ mt: 2 }}>Profile Content</Typography>}
      {value === 2 && <Typography sx={{ mt: 2 }}>Settings Content</Typography>}
    </Box>
  );
}
