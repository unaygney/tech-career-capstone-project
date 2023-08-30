import React , {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SearchBar() {
    const [activity, setActivity] = useState('');

    const handleChange = (event) => {
      setActivity(event.target.value);
    };

    console.log(activity)
  return (
    <div className="container">
  <div className='search-bar'>
      <h2 className='heading-m'>Yakındaki Etkinlikler</h2>
      <div className="form-wrapper">
      <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Etkinlik Türü</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activity}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"SİNEMA"}>Sinema</MenuItem>
          <MenuItem value={"TİYATRO"}>Tiyatro</MenuItem>
          <MenuItem value={"SERGİ"}>Sergi</MenuItem>
          <MenuItem value={"KONSER"}>Konser</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
    </div>
    </div>
  
  )
}

export default SearchBar
