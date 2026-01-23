import React from 'react'
import {useState} from "react"
import {Button,Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
function BasicDialog() {
    const [open,setOpen]=useState(false);
  return (
    <div>
      <Button variant="contained" onClick={()=>setOpen(true)}>open dialog</Button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>this is the title</DialogTitle>
        <DialogContent>this is the content..aygshgljkdfhsjkhdfgjfglhlsdghdkjhgkdjshfgkjsdh.</DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>cancel</Button>
            <Button variant='contained'>yes</Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}

export default BasicDialog;
