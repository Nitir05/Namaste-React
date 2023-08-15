import { clearCart } from "../utils/cartSlice";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import Shimmer from "./Shimmer";

const Cart = () => {
    const dispatch = useDispatch();
    //subscribing to the store using Selector
    //make sure to subscribe to th correct store else it will be huge perfomance loss
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return cartItems.length === 0 ? <Shimmer/> : (
        <div className="flex justify-center">
            <div className="shadow-lg p-4 m-4 w-full">
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
                <div className="shadow-lg w-full h-full">

                </div>
            </div>
        </div>
    )
};

export default Cart;
