import { Grid, Paper } from "@mui/material";

export default function MuiGridExample() {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={6}>
    //     <Paper sx={{ p: 2 }}>Left</Paper>
    //   </Grid>
    //   <Grid item xs={6}>
    //     <Paper sx={{ p: 2 }}>Right</Paper>
    //   </Grid>
    // </Grid>

    <Grid container spacing={2}>
      <Grid item xs={6}>Block 1</Grid>
      <Grid item xs={6}>Block 2</Grid>
    </Grid>

  );
}
