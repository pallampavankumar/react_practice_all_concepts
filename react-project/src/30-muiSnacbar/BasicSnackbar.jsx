import {React,useState} from 'react'
import {Alert, Button, Snackbar} from "@mui/material"
function BasicSnackbar() {
    const [open,setOpen]=useState(false);
  return (
    <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
            Show Message
        </Button>
        {/* <Snackbar  open={open} onClose={()=>setOpen(false)} message="this is snackbar this is snackbarr" autoHideDuration={3000}>

        </Snackbar> */}
    {/* snackbar with severety */}
        {/* <Snackbar onClose={()=>setOpen(false)} message="this is snackbar this is snackbarr" autoHideDuration={3000}>
           <Alert severity='success' variant='filled' onClose={()=>setOpen(false)}>
            submitted successfully
           </Alert>
        </Snackbar> */}
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}      >
        <Alert
          severity="warning"
          variant="outlined"
          onClose={() => setOpen(false)}
          action={
          <Button color="secondary" size="small" onClick={() => alert("Undo clicked")}>
            UNDO
          </Button>
        }
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>

    </div>
  )
}

export default BasicSnackbar
