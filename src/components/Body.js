import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBackendData from "../utils/useBackendData";

const Body = () => {
  let [restroList, filteredRestro] = useBackendData();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you are offline!! Please check your internet connection!!
      </h1>
    );
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap ml-6 justify-center">
        {filteredRestro.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurentCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
