import React from "react";


const styles = {
  homeStyle: {
    justifyContent: 'flex-wrap',
    position: 'absolute',
    margin: '0px',
    color: 'white',
    // textAlign: 'center'
  },
};

export default function Home() {
    return (
      <div className="home" style={styles.homeStyle}>
          <main>
            <h1>Isaak Morales</h1>
              <p>Full Stack Web Deb, Gamer, Dream Chaser</p>
          </main>
  
      </div>
    );
  }