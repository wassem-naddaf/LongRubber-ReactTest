import MenuItem from '../MenuItem/MenuItem';
import './menu-category.scss';
function Splitter(props) {
    const isLast = props.isLast;
    return (isLast)? '' : <hr className="splitter" />;
}
export default function MenuCategory(props) {
    return (
        <div className="menu-category" >
            <h3 className="title gray4-text pl-md">{props.name}</h3>
            <div className="menu-items shadow flex-column white-bg">
                {props.items.map((v, idx) =>
                    <div>
                        <MenuItem item={v}/>
                        <Splitter isLast={idx === props.items.length} />
                    </div>
                )}
            </div>
        </div>
    );
}