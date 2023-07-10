import { ITEM_URL, MENU_URL } from "../utils/constants";

const Menu = (props) => {
  const { itemData } = props;
  return (
    <div className="menu-container">
      <div className="menu-details">
        <h3 className="item-name">{itemData.card.info.name}</h3>
        <p className="item-price">₹ {itemData.card.info.price / 100}</p>
        <p className="item-desc"> {itemData.card.info.description}</p>
      </div>
      <div className="menu-image">
        <img src={ITEM_URL + itemData.card.info.imageId} alt="Item Image" />
      </div>
    </div>
  );
};

export default Menu;
