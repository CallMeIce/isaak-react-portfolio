import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    headerStyle: {
      background: 'lightgrey',
      justifyContent: 'flex-wrap',
      width: '100vw',
      position: 'sticky',
      top: '0',
      margin: '0px'
    },
  };

  return (
    <Box style={styles.headerStyle} sx={{ width: '100%', bgcolor: 'lightgrey' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="About Me" component={Link} to='/About' value="About"/>
        <Tab label="Projects" component={Link} to='/Projects' value="Projects"/>
        <Tab label="Contact Me" component={Link} to='/Contact' value="Contact Me"/>
      </Tabs>
    </Box>
  );
}
