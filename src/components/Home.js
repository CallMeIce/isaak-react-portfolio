import React from "react";


const styles = {
  homeStyle: {
    justifyContent: 'center',
    // position: 'absolute',

    margin: '0px',
    color: 'white',
    textAlign: 'center'

  },
};

export default function Home() {
    return (
      <div className="home" style={styles.homeStyle}>
          <main>
            <h1>Isaak Morales</h1>
              <p>Full Stack Web Developer, Gamer, Dream Chaser</p>
          </main>
  
      </div>
    );
  }