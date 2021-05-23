import React from 'react';
import MenuCategory from '../MenuCategory/MenuCategory';
export default function RestaurantMenu(props) {
    return (
        <div className="restaurant-menu w-100" >
            {props.data.map(e => <MenuCategory name={e.menu} items={e.items} /> )}
        </div>
    );
}
