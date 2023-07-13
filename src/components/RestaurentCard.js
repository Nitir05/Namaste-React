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
    <div className="m-3 p-2 w-[250px] h-[290px] rounded-lg hover:border 1px divide-solid black shadow-md">
      <img
        className="rounded-sm"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurent image"
      />
      <h3 className="font-bold py-2">{name}</h3>
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
