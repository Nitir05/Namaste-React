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
  } = resData;
  return (
    <div className="m-3 p-2 w-[250px] h-auto rounded-lg hover:border 1px divide-solid black shadow-md">
      <img
        className="rounded-md w-full"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurent image"
      />
      <h3 className="font-medium pt-2">{name}</h3>
      <p className="text-[13px] text-[#686b78]">{cuisines.join(", ")}</p>
      <div className="rflex justify-between">
        <span className="pr-1">{avgRating}</span>
        <span className="pr-1">{slaString}</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

//higher order component : component that takes another component as input and return a component

const WithPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
