import { useState } from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useQuery } from "react-query";

const fetchAppointments = async () => {
  const res = await fetch(
    "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temproary=false&inviteOnly=false&operational=true&serviceName=Global+Entry"
  );
  return res.json();
};

export const AppointmentSearch = () => {
  const { data, status } = useQuery("appointments", fetchAppointments);
  const [selectedStates, setselectedStates] = useState<number[]>([]);
  console.log(data);
  const handleChange = (event: any) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    console.log(value);
    setselectedStates(value);
  };

  return (
    <div>
      <h1>Global Entry Checker</h1>
      <FormControl sx={{ width: "75%" }}>
        <InputLabel id="demo-simple-select-label">Locations</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedStates}
          label="States"
          onChange={handleChange}
          multiple
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value={10}>
            <div>Ten</div>
            <Checkbox checked={selectedStates.indexOf(10) > -1} />
          </MenuItem>
          <MenuItem value={20}>
            <div>Twenty</div>
            <Checkbox checked={selectedStates.indexOf(20) > -1} />
          </MenuItem>
          <MenuItem value={30}>
            <div>Thirty</div>
            <Checkbox checked={selectedStates.indexOf(30) > -1} />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
