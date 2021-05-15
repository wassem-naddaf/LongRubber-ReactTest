import React, { useState } from 'react';
const MAX_RATE = 5;

export default function Rate({ style }){
  const [rate, setRate] = useState(4);

  return (
    <div style={{ ...style, ...styles.container }}>
      {[...Array(rate)].map(v => <div style={{ ...styles.circle, ...styles.filledCircle }}></div>)}
      {[...Array(MAX_RATE - rate)].map(v => <div style={styles.circle}></div>)}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    borderRadius: '50%',
    width: 15,
    height: 15,
    border: '1px solid black',
    margin: '0px 1px'
  },
  filledCircle: {
    backgroundColor: '#FFCD3F'
  }
}