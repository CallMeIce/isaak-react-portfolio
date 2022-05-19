import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const styles = {
  footerStyle: {
    background: 'lightgrey',
    justifyContent: 'flex-wrap',
    width: '100vw',
    position: 'fixed',
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
        label="Contact Page" 
        href="#Contact"
        value="contactpageicon" 
        icon={<ContactPageIcon />} 
      />
    </BottomNavigation>
  );
}