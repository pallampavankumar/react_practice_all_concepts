import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import IconButton from '@mui/material/IconButton'
import SaveIcon from "@mui/icons-material/Save"
import Home from "@mui/icons-material/Home"
import {ListItem,ListIcon,ListItemText, ListItemIcon} from "@mui/material"
 import {Button} from "@mui/material"

function BasicIcon() {
  return (
    <div>
      <DeleteIcon/>
      <EditIcon/>
      <IconButton color="primary">
        <DeleteIcon/>
      </IconButton>
      <Button variant="contained" endIcon={<SaveIcon/>}>
        Save
      </Button>
      <ListItem>
        <ListItemIcon>
          <Home/>
        </ListItemIcon>
                <ListItemIcon>
          <Home/>
        </ListItemIcon>
                <ListItemIcon>
          <Home/>
        </ListItemIcon>
        <ListItemText primary="Home"></ListItemText>
      </ListItem>
      
    </div>
  )
}

export default BasicIcon
