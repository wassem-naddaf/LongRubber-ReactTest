import React, { useState } from 'react';
const MAX_RATE = 5;

export default function Rate({ style, data }){
  const [rate, setRate] = useState(4);
  return (
    <div style={{ ...style, ...styles.container }}>
      {[...Array(data)].map(v => <div key={v} style={{ ...styles.circle, ...styles.filledCircle }}></div>)}
      {[...Array(MAX_RATE - data)].map(v => <div key={v} style={styles.circle}></div>)}
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
    width: 20,
    height: 20,
    border: '1px solid black',
    margin: '0px 1px'
  },
  filledCircle: {
    backgroundColor: '#FFCD3F'
  }
}