import * as React from "react";
import { countryList } from "./country";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({setData}) {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
    console.log(event.target.value,"country")
    setData((prevData)=>({...prevData,country:event.target.value}))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
         <label htmlFor="country">Country</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Age"
          onChange={handleChange}
        >
        {
            countryList.map((country,index)=>{
        return   <MenuItem
          key={index}
         value={country.name}>{country.name}</MenuItem>

            })
        }
         
        </Select>
      </FormControl>
    </Box>
  );
}