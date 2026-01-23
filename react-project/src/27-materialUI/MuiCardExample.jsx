import React from 'react'
import {Card,CardContent,cardContent,Typography,Typrography,Stack,Button,CardActions,CardHeader} from '@mui/material'
function MuiCardExample() {
  return (
    <div>
      <Card sx={{ maxWidth: 300, p: 1}}>
        <CardContent>
        <Typography variant='h1'>user profile</Typography>
        <Typography variant='body1'>name:pavan</Typography>
        <Typography variant='body2'>role:developer</Typography>
        <Typography variant='body8'>role:developer</Typography>
        </CardContent>
      </Card>

            <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="User" subheader="Active" />
        <CardContent>
          <Typography>Name: Pavan</Typography>
        </CardContent>
        <CardActions>
           <Typography>Name: Pavan</Typography>
          <Button>View</Button>
        </CardActions>
      </Card>


    </div>
  )
}

export default MuiCardExample
