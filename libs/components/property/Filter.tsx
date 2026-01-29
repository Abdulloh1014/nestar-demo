import React, { useState } from "react";
import {
  Stack,
  Typography,
  Checkbox,
  Button,
  OutlinedInput,
  Tooltip,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";

const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [price, setPrice] = useState({ start: 0, end: 2000000 });
  const [square, setSquare] = useState({ start: 0, end: 500 });

  return (
    <Stack className="filter-main">

      {/* Search */}
      <Stack className="find-your-home" mb="40px">
        <Typography className="title-main">Find Your Home</Typography>
        <Stack className="input-box" direction="row" alignItems="center">


          {/* <OutlinedInput
            fullWidth
            value={searchText}
            placeholder="What are you looking for?"
            onChange={(e) => setSearchText(e.target.value)}
          /> */}


          <OutlinedInput
  fullWidth
  value={searchText}
  placeholder="What are you looking for?"
  onChange={(e) => setSearchText(e.target.value)}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        size="small"
        onClick={() => setSearchText("")}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </InputAdornment>
  }
/>


          

          
          <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Location */}
      <Stack className="find-your-home" mb="30px">
        <Typography className="title-sub">Location</Typography>
        {["SEOUL", "BUSAN", "INCHEON", "DAEGU"].map((city) => (
          <Stack key={city} direction="row" alignItems="center">
            <Checkbox />
            <Typography>{city}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* Property Type */}
      <Stack className="find-your-home" mb="30px">
        <Typography className="title-sub">Property Type</Typography>
        {["APARTMENT", "VILLA", "HOUSE"].map((type) => (
          <Stack key={type} direction="row" alignItems="center">
            <Checkbox />
            <Typography>{type}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* Rooms */}
<Stack className={"find-your-home"} mb={"30px"}>
    <Typography className={"title-sub"}>Rooms</Typography>
    <Stack direction={"row"} className={"room-filter"}>
        {["Any", "1", "2", "3", "4", "5+"].map((num) => (
            <Button 
                key={num} 
                className={num === "Any" ? "room-btn active" : "room-btn"}
            >
                {num}
            </Button>
        ))}
    </Stack>
</Stack>

{/* Bedrooms */}
<Stack className={"find-your-home"} mb={"30px"}>
    <Typography className={"title-sub"}>Bedrooms</Typography>
    <Stack direction={"row"} className={"room-filter"}>
        {["Any", "1", "2", "3", "4", "5+"].map((num) => (
            <Button 
                key={num} 
                className={num === "Any" ? "room-btn active" : "room-btn"}
            >
                {num}
            </Button>
        ))}
    </Stack>
</Stack>

      {/* Options */}
      <Stack className="find-your-home" mb="30px">
        <Typography className="title-sub">Options</Typography>
        {["Barter", "Rent"].map((opt) => (
          <Stack key={opt} direction="row" alignItems="center">
            <Checkbox />
            <Typography>{opt}</Typography>
          </Stack>
        ))}
      </Stack>

     {/* Square meter */}
<Stack className="find-your-home" mb="30px">
  <Typography className="title-sub">Square meter</Typography>
  <Stack direction="row" alignItems="center" spacing={1}>
    
    {/* Min input */}
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="min-square">Min</InputLabel>
      <OutlinedInput
        id="min-square"
        label="Min"
        type="number"
        value={square.start}
        onChange={(e) => setSquare({ ...square, start: +e.target.value })}
      />
    </FormControl>

    <div className="line">—</div>

    {/* Max input */}
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="max-square">Max</InputLabel>
      <OutlinedInput
        id="max-square"
        label="Max"
        type="number"
        value={square.end}
        onChange={(e) => setSquare({ ...square, end: +e.target.value })}
      />
    </FormControl>

  </Stack>
</Stack>

      {/* Price Range */}
      <Stack className="find-your-home">
        <Typography className="title-sub">Price Range</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <OutlinedInput
            type="number"
            value={price.start}
            onChange={(e) =>
              setPrice({ ...price, start: +e.target.value })
            }
          />
          <div className="line">—</div>
          <div className="line"></div>
          <OutlinedInput
            type="number"
            value={price.end}
            onChange={(e) =>
              setPrice({ ...price, end: +e.target.value })
            }
          />
        </Stack>
      </Stack>

    </Stack>
  );
};

export default Filter;
