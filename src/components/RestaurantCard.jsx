import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, sla, avgRatingString, cloudinaryImageId } =
        props?.resData.info;
    return (
        <div className="p-1 w-64 h-96 overflow-hidden rounded-lg hover:border hover:border-solid hover:border-gray-400 hover:bg-gray-100">
            <img
                className="w-[100%] h-[50%] rounded-tr-lg rounded-tl-lg m-0"
                src={CDN_URL + cloudinaryImageId}
                alt="Res Image"
            />
            <h3 className="font-bold text-lg my-1">{name}</h3>
            <h4 className="overflow-hidden text-ellipsis text-md mb-1">
                {cuisines.join(", ")}
            </h4>
            <h4 className="text-sm mb-1">{avgRatingString} ⭐️</h4>
            <h4 className="text-sm">{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
