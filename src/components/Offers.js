import { BANNER_URL } from "../utils/constants";

const Offers = (props) => {
  const { offerData } = props;
  console.log(props);
  return (
    <div>
      <div>
        <div className="mr-[50px] inline-block cursor-pointer w-full">
          <img
            className="transition duration-500 ease-out transform hover:scale-105 w-[400px] h-[350px] p-6"
            src={BANNER_URL + offerData.data.creativeId}
            alt="corousel-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
