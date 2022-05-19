import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="About Me" href="#About" value="About"/>
        <Tab label="Projects" href="#Projects" value="Projects"/>
        <Tab label="Contact Me" href="#Contact" value="Contact Me"/>
      </Tabs>
    </Box>
  );
}
