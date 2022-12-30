import React, { useState } from "react";
import "./App.css";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function App() {
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);

  const handleChange = (event: any) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    console.log(value);
    setSelectedLocations(value);
  };
  return (
    <div className="App">
      <h1>Global Entry Checker</h1>
      <FormControl sx={{ width: "75%" }}>
        <InputLabel id="demo-simple-select-label">Locations</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLocations}
          label="Locations"
          onChange={handleChange}
          multiple
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value={10}>
            <div>Ten</div>
            <Checkbox checked={selectedLocations.indexOf(10) > -1} />
          </MenuItem>
          <MenuItem value={20}>
            <div>Twenty</div>
            <Checkbox checked={selectedLocations.indexOf(20) > -1} />
          </MenuItem>
          <MenuItem value={30}>
            <div>Thirty</div>
            <Checkbox checked={selectedLocations.indexOf(30) > -1} />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
