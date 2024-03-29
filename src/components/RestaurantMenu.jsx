import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuOffer from "./MenuOffer";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const resId = useParams()?.resId;
    const json = useRestaurantMenu(resId);
    const [resData, offerList, menuItems] = useRestaurantMenu(resId);
    if (resData === null) return <Shimmer />;
    return (
        <div className="max-w-[800px] min-h-[800px] m-5 mx-auto mt-0">
            <div>
                <div className="pt-4 mb-4">
                    <div
                        className="inline-block mr-4"
                        style={{ width: "calc(100% - 120px)" }}
                    >
                        <div>
                            <p className="text-2xl font-semibold text-[#282c3f] capitalize mb-2">
                                {resData?.name}
                            </p>
                            <p
                                className="text-sm text-[#7e808c] overflow-hidden text-ellipsis whitespace-nowrap mb-1"
                                style={{ height: "calc(0.93rem + 2px)" }}
                            >
                                {resData?.cuisines?.join(", ")}
                            </p>
                        </div>
                        <div className="flex items-center h-4">
                            <p className="text-sm text-[#7e808c]">
                                {resData?.areaName}
                            </p>
                            <p className="text-sm text-[#7e808c] mr-1">
                                {resData?.sla?.lastMileTravelString}
                            </p>
                        </div>
                    </div>
                    <button className="res-ratings-wrapper">
                        <span className="res-avg-rating">
                            <span className="icon-star fa fa-star checked"></span>
                            <span>{resData?.avgRating}</span>
                        </span>
                        <span className="res-total-ratings">
                            {resData?.totalRatingsString}
                        </span>
                    </button>
                </div>
                <hr className="res-header-seperator res-header-margin-bottom" />
                <div className="res-header-margin-bottom">
                    <ul className="res-time-cost-wrapper">
                        <li className="res-time-cost-item">
                            <svg
                                className="res-time-cost-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                            >
                                <circle
                                    r="8.35"
                                    transform="matrix(-1 0 0 1 9 9)"
                                    stroke="#3E4152"
                                    strokeWidth="1.3"
                                ></circle>
                                <path
                                    d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                                    fill="#3E4152"
                                ></path>
                            </svg>
                            <span>{resData?.sla?.slaString}</span>
                        </li>
                        <li className="res-time-cost-item">
                            <svg
                                className="res-time-cost-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                            >
                                <circle
                                    cx="9"
                                    cy="9"
                                    r="8.25"
                                    stroke="#3E4152"
                                    strokeWidth="1.5"
                                ></circle>
                                <path
                                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                                    fill="#3E4152"
                                ></path>
                            </svg>
                            <span>{resData?.costForTwoMessage}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: "16px", paddingRight: "10px" }}>
                    <div className="grid-slider">
                        <div
                            style={{ marginBottom: "10px" }}
                            className="grid-row"
                        >
                            {offerList.map((offer) => (
                                <MenuOffer
                                    key={offer?.info?.offerIds?.[0]}
                                    offerData={offer?.info}
                                ></MenuOffer>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="veg-only-wrapper">
                    <div className="veg-only">
                        <div className="veg-only-label">Veg Only</div>
                        <button
                            className="veg-only-filter"
                            role="switch"
                            aria-label="Veg Only"
                            aria-checked="false"
                        >
                            <span className="toggle-switch">
                                <span className="toggle-thumb">
                                    <span className="toggle-thumb-content">
                                        <span className="veg-only-circle"></span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="styles-divider"></div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
