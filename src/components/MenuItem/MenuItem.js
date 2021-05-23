import './menu-item.scss';
import foodThumb from './../../assets/images/cart/mini-food.png';
export default function MenuItem(props) {
    return (
        <div className="menu-item p-md flex ">
            <div className="flex">
                <img src={foodThumb} className="mr-lg" />
                <div className="flex-column justify-around">
                    <h4 className="name dark-text">{props.item.name}</h4>
                    <span className="price primary-text">{props.item.price}</span>
                </div>
            </div>
            <button className="add-btn primary-border transparent-bg primary-text">+ Add</button>
        </div>
    )
}