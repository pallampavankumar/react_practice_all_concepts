import React from 'react'
import {Stack,Button,Typography} from '@mui/material'
function StackExample() {
  return (
    <div>
        {/* <Stack direction="row" spacing={4} alignItems="end" justifyContent="space-around" sx={{width:400}}>
        <Button variant="contained">One</Button>
        <Button variant="contained">Two</Button>
        <Button variant="contained">Three</Button>
        </Stack> */}

        <Stack
  direction="row"
  alignItems="center"
  spacing={2}
>
  <Button>Short</Button>
  <Typography variant="h3">Tall Text</Typography>
</Stack>

    </div>
  )
}

export default StackExample
