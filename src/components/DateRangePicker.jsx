import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { data } from "../data/data";
import { useDispatch, useSelector } from "react-redux";

import { dateRangeFilterAction } from "../actions/dateRangeFilterAction";
import {
  dataRecordsAction,
  dataRecordsFilteredAction,
} from "../actions/dataRecordsAction";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([new Date(), new Date()]);

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const dispatch = useDispatch();

  // const { data } = useSelector((state) => state.data);

  const filterer = () => {
    const filteredData = data.filter(
      (el) => {
        return (
          Date.parse(el.created) >= Date.parse(`${startDate}`) &&
          Date.parse(el.created) <= Date.parse(endDate)
        );
      }

      // Date.parse(el.created) >= Date.parse("04/15/2022") &&
      // Date.parse(el.created) <= Date.parse("07/19/2022")
    );

    console.log(data);
    console.log(startDate);
    console.log(filteredData);
    dispatch(dataRecordsAction(filteredData));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText='FROM'
        endText='TO'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setStartDate(
            new Date(newValue[0].toString()).toLocaleDateString("en-US")
          );
          setEndDate(
            new Date(newValue[1].toString()).toLocaleDateString("en-US")
          );
          dispatch(dateRangeFilterAction({ startDate, endDate }));
          filterer();
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
