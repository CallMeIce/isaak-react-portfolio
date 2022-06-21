import React from 'react'

const styles = {
  resumeHeader: {
    justifyContent: 'flex',
    margin: '0px',
    color: 'white',
    textAlign: 'center'
  },
};


export default function Resume() {
  return (
    <div style={styles.resumeHeader} > 
      <h1>Welcome to my Resume Page</h1>
        <h4>Here are some skills I have acquired</h4>
          <p>HTML, CSS, Javascript, Jquery, Express, SQL, Handlebars, Nodejs, React</p>
        <h3>If you'd like to  download my resume, on the bottom left of the footer will be a download icon. Click it and it will send you do my resume.</h3>
    </div>
  )
}
