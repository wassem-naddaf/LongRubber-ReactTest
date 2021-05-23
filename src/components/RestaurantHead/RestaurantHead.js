import React from 'react';
import { useHistory } from 'react-router';
import BackIcon from './../../assets/images/back.svg';
import Logo from './../../assets/images/logo.png';
import Bag from './../../assets/images/shopping-bag.svg';

export default function RestaurantHead() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }
    return (
        <div className="w-100" style={styles.container}>
            <div style={styles.container}>
                <img className="mx-lg cursor-pointer" src={BackIcon} width="20px" onClick={goBack} />
                <img className="mx-xl" src={Logo} width="50px" />
                <h2 className="dark-text">Best classic New York City restaurants</h2>
            </div>
            <div>
                <img src={Bag} />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
};