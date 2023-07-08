import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=287845&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
  };

  return (
    <div className="restaurant-container">
      <div className="restaurantInfo">
        <div className="res-name">
          <h1>Haldiram</h1>
          <h4>Cuisines</h4>
          <h4>location</h4>
        </div>
        <div className="ratings">
          <h3>4.3</h3>
          <h4>total rating</h4>
        </div>
      </div>
      <div className="res-sla">
        <div className="timings">
          <h3>23 mins</h3>
          <h3>Rs 300 for two</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
