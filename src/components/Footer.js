import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Back to Top"
        value="Backtotop"
        icon={<ArrowUpwardOutlinedIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        href ="https://www.linkedin.com/in/isaak-morales"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="Github"
        href = "https://github.com/CallMeIce"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction 
        label="Contact Page" 
        value="contactpageicon" 
        icon={<ContactPageIcon />} 
      />
    </BottomNavigation>
  );
}
