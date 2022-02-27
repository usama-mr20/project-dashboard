import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PDataGrid from "../components/DataGrid";
import { LicenseInfo } from "@mui/x-data-grid-pro";
import DateRangePicker from "../components/DateRangePicker";

import Stats from "../components/Stats";
const myfubn = () => {
  LicenseInfo.setLicenseKey(` ${process.env.REACT_APP_MUI_X_KEY}`);
};

const Home = () => {
  return (
    <Container maxWidth='xl'>
      {myfubn()}
      <br />
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Stats />

        <div>
          <h3>Show records in range: </h3>
          <DateRangePicker />
          <br />
        </div>
      </Grid>
      <div>
        <br />

        <PDataGrid />
      </div>
    </Container>
  );
};

export default Home;
