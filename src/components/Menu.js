import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Menu = (props) => {
  const { itemData } = props;
  const { name, price, description, imageId } = itemData?.card?.info;

  const dispatch = useDispatch();

  const handleAddItem = (itemData) => {
    //dispatch an action
    dispatch(addItem(itemData));
    //send an toast notification
    toast.success('Item added to cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="pb-[14px]">
        <div className="flex justify-between items-start">
          <div className="max-w-[calc(100%-144px)]">
            <div className="mt-1">
              <h3 className="mr-1 text-xl font-medium text-[#3e4152] break-all">
                {name}
              </h3>
            </div>
            <div className="mt-1 ">
              <span className="text-base mr-2 font-normal text-[#3e4152]">
                <span>₹ {price / 100}</span>
              </span>
            </div>
            <div className="w-full mt-[14px] text-[rgba(40,44,63,.45)] text-[1] tracking-[-0.3px] ">
              {description}
            </div>
          </div>
          <div className="relative ml-4 min-w-[118px] h-[120px] text-[0]">
            <div className="absolute w-full">
              <button
                className="p-2 bg-white absolute shadow-lg ml-8 mt-16 rounded-md text-sm text-green-400 w-6/12 "
                onClick={() => handleAddItem(itemData)}
              >
                ADD +
              </button>
            </div>
            <img
              className="w-[118px] h-24 rounded-md object-cover"
              src={ITEM_URL + imageId}
              alt="food image"
            />
          </div>
        </div>
      </div>
      <div className="mt-[6px] h-[0.5px] border-b-[0.5px] border-solid border-[#d3d3d3] my-5"></div>
    </div>
  );
};

export default Menu;
