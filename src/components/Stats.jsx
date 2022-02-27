import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { data } from "../data/data";
const Stats = () => {
  return (
    <>
      {/* {console.log(Date.parse("07/17/2015"))} */}
      <Grid>
        <Typography variant='h1' color='primary'>
          30
        </Typography>
        <Typography variant='body1' color='primary'>
          Total Projects
        </Typography>
      </Grid>
      <Grid>
        <Typography variant='h1' color='primary'>
          {/* $ {Math.trunc(data.reduce((n, { budget }) => n + budget, 0))} */}$
          521K
        </Typography>
        <Typography variant='body1' color='primary'>
          Total Budget
        </Typography>
      </Grid>
      <Grid>
        <Typography variant='h1' color='primary'>
          4
        </Typography>
        <Typography variant='body1' color='primary'>
          New Projects
        </Typography>
      </Grid>
      <Grid>
        <Typography variant='h1' color='primary'>
          11
        </Typography>
        <Typography variant='body1' color='primary'>
          In working
        </Typography>
      </Grid>
    </>
  );
};

export default Stats;
