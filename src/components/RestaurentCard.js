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
      <p>{cuisines.join(", ")}</p>
      <div className="res-estimates">
        <span>{avgRating}</span>
        <span>{slaString}</span>
        <span>₹{costForTwo / 100} FOR TWO</span>
      </div>
    </div>
  );
};

export default RestaurentCard;
