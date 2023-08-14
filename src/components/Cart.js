import Menu from "./Menu";
import { useSelector } from "react-redux";

const Cart = () => {
    //subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log("Cart Items",cartItems);
    return (
        <div className="flex justify-center">
            <div className="shadow-lg p-4 mt-4">
                {cartItems.map((item)=><Menu key={item.card.info.id} itemData={item}/>)}
            </div>
            <div className="ml-7 mt-4">
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
