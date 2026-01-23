import React from 'react'
import { useState } from "react"
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Stack
} from "@mui/material";
function DarkModeApp() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          p: 4,
          bgcolor: "background.default"
        }}
      >
        <Stack spacing={3} alignItems="center">

          <Typography variant="h5">
            {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Typography>

          <Button
            variant="contained"
            onClick={() => setDark(!dark)}
          >
            Toggle Theme
          </Button>

          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h6">Example Card</Typography>
              <Typography variant="body2">
                The card background also changes with theme.
              </Typography>
            </CardContent>
          </Card>

        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default DarkModeApp
