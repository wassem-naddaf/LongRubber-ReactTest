import React from 'react';
import Rate from './Rate';
import { useHistory } from 'react-router-dom';

export default function RestaurantCard(props) {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(`restaurant/${props.data.id}`)
  }
  return (
    <div style={styles.container} onClick={handleClick}>
      <div>
        <img alt="restaurant-image" src={props.data.images[0]} style={styles.image} />
      </div>
      <p style={{ ...styles.title, ...styles.noMargin }}>{props.data.name}</p>
      <p style={styles.noMargin}>{props.data.cuisine}</p>
      <div style={styles.footer}>
        <Rate style={styles.rate} data={props.data.rate} />
        <p className="primary-text cursor-pointer">{props.data.status}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#FFFFFF',
    boxShadow: '0px 8px 7px #00000012',
    borderRadius: '15px',
    padding: 12,
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    fontWeight: 'bold',
  },
  noMargin: {
    margin: 0
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  rate: {

  }
};