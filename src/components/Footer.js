import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from "react-router-dom";


const styles = {
  footerStyle: {
    background: 'lightgrey',
    justifyContent: 'flex-wrap',
    width: '100vw',
    position: 'absolute',
    bottom: '0',
    margin: '0px'
  },
};

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={styles.footerStyle} sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Download My Resume"
        href="https://docs.google.com/document/d/1eGeJR7NN6qpDoTNQmqOVgY40xMfKHuozxN5ev2LF9iw/edit?usp=sharing"
        icon={<FileDownloadIcon />}
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
        label="Home" 
        component={Link} to='/isaak-react-portfolio/'
        value="HomeIcon" 
        icon={<HomeIcon />} 
      />
    </BottomNavigation>
  );
}