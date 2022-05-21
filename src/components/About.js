import React from 'react'
import Me from '../images/picture-of-me.JPG'

const styles = {
  aboutStyle: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  },
  imageStyle: {
    width: '19%',
    borderRadius: 40,
  }



};


export default function About() {
  return (
    <div style={styles.aboutStyle}> 
    <p>Hello, I'm Isaak Morales a current student in the UPenn Bootcamp for Full Stack Web Development.</p>
    <p>I am a hard worker whether it is working independently or with other people in a group.</p>
    <p>Some technical skills I have acquired are: HTML, CSS, Nodejs, Reactjs, Express, Javascrip and Git.</p>
    <p>I would like to learn more and create more projects to become even more fluent in them.</p>
    <img style={styles.imageStyle} src={Me} alt='Me' />
    </div>
  )
}
