import React from 'react'
import { TextField,Stack } from '@mui/material'
function MuiInputs() {
  return (
    <div>
      <Stack spacing={20}>
    <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="filled" />
      <TextField label="Passwordsaidufhsaiufdh" type="password" variant="standard" />
      </Stack>
    </div>
  )
}

export default MuiInputs
