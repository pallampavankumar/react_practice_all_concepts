import React from 'react'
import { AppBar,Toolbar, Typography,IconButton,Button } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";

function MuiNavbar() {
  return (
    <div>
      {/* <AppBar>
        <Toolbar>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
                My App
            </Typography>
            <Typography >
              Login
            </Typography>
        </Toolbar>
      </AppBar> */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>

    </div>
  )
}

export default MuiNavbar
