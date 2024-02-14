import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [filteredResList, setFilteredResList] = useState([]);
    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const getRestaurantData = async () => {
            try {
                const data = await fetch(API_URL);
                const json = await data.json();
                const newResList =
                    json?.data?.cards.filter(
                        (item) =>
                            item?.card?.card?.id === "restaurant_grid_listing"
                    )?.[0]?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants || [];
                setResList(newResList);
                setFilteredResList(newResList);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        getRestaurantData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return <h1> Looks like you are offline please check your internet</h1>;

    return filteredResList.length === 0 ? (
        <Shimmer />
    ) : (
        <div
            className="p-0 font-light text-[#282c3f]"
            style={{
                marginRight: "calc(10% + 36px)",
                marginLeft: "calc(10% + 36px)",
            }}
        >
            <div className="my-2 mx-0">
                <input
                    className="border border-solid border-gray-400 rounded-md mx-2 p-1"
                    type="search"
                    name="search"
                    id="search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="rounded-md bg-orange-400 font-bold p-1 mx-2"
                    onClick={() => {
                        if (searchText) {
                            setFilteredResList(
                                resList.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                )
                            );
                        }
                    }}
                >
                    Search
                </button>
                <button
                    className="rounded-md bg-orange-400 font-bold p-1 mx-2"
                    onClick={() => {
                        setFilteredResList(
                            resList.filter((res) => res.info.avgRating > 4)
                        );
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button
                    className="rounded-md bg-orange-400 font-bold p-1 mx-2"
                    type="reset"
                    onClick={() => {
                        setFilteredResList(resList);
                    }}
                >
                    Reset Filter
                </button>
            </div>
            <div className="flex flex-wrap gap-4">
                {filteredResList.map((res) => (
                    <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
                        <RestaurantCard resData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
