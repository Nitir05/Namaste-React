import { clearCart } from "../utils/cartSlice";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import { EMPTY_CART_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    //subscribing to the store using Selector
    //make sure to subscribe to th correct store else it will be huge perfomance loss
    const cartItems = useSelector((store) => store.cart.items);
    const totalBill = cartItems.reduce((sum, item)=> sum + (item?.card?.info?.price/100), 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return cartItems.length === 0 ? (
        <div className="w-auto h-auto grid place-items-center">
            <div className="w-6/12 mt-10 p-4 place-items-center">
                <img src={EMPTY_CART_IMG} />
                <div className="font-bold text-[24px] mt-6 text-[#535665] w-6/12 text-center pt-[10px] ml-[70px]">Your cart is empty</div>
                <p className="text-[#7e808c] mt-2 w-6/12 ml-[70px] text-center">You can go to home page to view more restaurants</p>
                <div className="w-6/12 text-center p-4 mt-5 ml-[70px]">
                    <Link to="/"><button className="bg-orange-500 text-white p-2">SEE RESTAURANTS NEAR YOU</button></Link>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex justify-center">
            <div className="shadow-lg p-4 m-4 w-auto grid place-items-center">
                <button className="bg-black text-white font-bold rounded-md p-2 text-center" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.map((item)=><Menu key={item.card.info.id} itemData={item}/>)}
            </div>
            <div className="ml-7 m-4">
                <div className="p-2 h-24 w-[366px] shadow-lg">
                    <span>
                        Image
                    </span>
                    <span className="font-bold ml-8">
                        Restaurant Name
                    </span>
                </div>
                <div className="shadow-lg w-full h-auto">
                    {cartItems.map((item) => (
                        <div className="flex grow justify-between p-2 m-2" key={item?.card?.info?.id}>
                            <div className="pt-2 text-sm font-normal text-[#282c3f]">
                                {item?.card?.info?.name}
                            </div>
                            <div className=" border divide-solid border-[#d4d5d9] flex mt-2 cursor-pointer">
                                <div className="ml-2 mr-2 text-[#d4d5d9]">-</div>
                                <div className="ml-2 mr-2 text-green-300">+</div>
                            </div>
                            <div className="pt-2 text-[#535665] text-[13px] font-light text-right">
                                ₹ {item?.card?.info?.price/100}
                                <span className="pl-1"></span>
                                
                            </div>
                        </div>
                    ))}
                    <hr className="pb-1"></hr>
                    <div className="flex grow justify-between p-2 m-2">
                        <div className="pt-2 text-sm font-normal text-[#282c3f]">Total Bill</div>
                        <div className="pt-2 text-[#535665] text-[13px] font-light text-right">₹ {totalBill}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
