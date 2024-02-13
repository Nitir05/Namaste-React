import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resData, setResData] = useState(null);
    const [offerList, setOfferList] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenu(resId);
    }, []);

    const fetchMenu = async (resId) => {
        const data = await fetch(RES_MENU_URL + resId);
        const json = await data.json();
        setResData(json?.data?.cards?.[0]?.card?.card?.info);
        setOfferList(
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                ?.offers
        );
        setMenuItems(
            json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
    };

    return [resData, offerList, menuItems];
};

export default useRestaurantMenu;
