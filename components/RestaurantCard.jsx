const RestaurantCard = (props) => {
  console.log(props);
  const { name, cuisines, sla, avgRatingString, cloudinaryImageId } = props?.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Res Image"
      />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐️</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
