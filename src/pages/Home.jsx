import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PDataGrid from "../components/DataGrid";
import { LicenseInfo } from "@mui/x-data-grid-pro";
import DateRangePicker from "../components/DateRangePicker";
import Typography from "@mui/material/Typography";

import Stats from "../components/Stats";
const myfubn = () => {
  LicenseInfo.setLicenseKey(
    "x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e"
  );
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
