import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

function SearchBar({search , setSearch}) {


  return (
    <div className="container">
      <div className="search-bar">
        <h2 className="heading-m">Yakındaki Etkinlikler</h2>
        <div className="form-wrapper">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-search"
              label="Etkinlik Ara"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </Box>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
