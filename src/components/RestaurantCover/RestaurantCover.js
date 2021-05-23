import React from 'react';
import Rate from '../Rate';
import foodImg from '../../assets/images/cart/food2.png'
import './restaurant-cover.scss';
export default function RestaurantCover(props) {
    return (
        <div className="w-100 mt-xl white-bg restaurant-cover shadow"  >
            <div className="basic-info white-bg w-100 px-xl">
                <h2>Keika Ramen</h2>
                <div>
                    <p className="mb-lg">Classic • Japan</p>
                    <div style={styles.footer}>
                        <Rate data={4} style={styles.rate} />
                        <p className="status primary-text cursor-pointer">Open Now</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={foodImg} />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        justifyContent: 'space-between'
    },
};