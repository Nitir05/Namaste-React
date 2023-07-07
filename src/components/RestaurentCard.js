import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwo,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurent image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="res-estimates">
        <h4>{avgRating}</h4>
        <h4>{slaString}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
