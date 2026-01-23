import React from 'react'
import {Button} from '@mui/material'
function MuiButtons() {
  return (
    <div>
      <Button variant="text">Text button</Button>
      <Button variant="contained">contained button</Button>
      <Button variant="outlined">Outlined button</Button>
      <Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="contained" color="error">Error</Button>

    </div>
  )
}

export default MuiButtons
