import { useEffect } from "react";
import { RES_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu-container">
      <h1>Restaurant-Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Paneer</li>
        <li>Salad</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
