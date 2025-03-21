"use client";
import { useState, useEffect } from "react";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const handleRemoveItem = (id, color, size) => {
        const updatedCart = cart.filter((item) => item.id !== id || item.color !== color || item.size !== size);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleIncreaseQuantity = (id, color, size) => {
        const updatedCart = cart.map((item) =>
            item.id === id && item.color === color && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleDecreaseQuantity = (id, color, size) => {
        const updatedCart = cart.map((item) =>
            item.id === id && item.color === color && item.size === size && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    if (cart.length === 0) {
        return (
            <div className="max-w-[1272px] w-full px-4 mx-auto mt-9">
                <h2 className="text-xl font-bold">Your cart is empty</h2>
            </div>
        );
    }

    return (
        <div className="max-w-[1272px] w-full px-4 mx-auto mt-9">
            <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
            <div className="mt-6">
                {cart.map((item) => (
                    <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center border-b py-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-lg mr-6"
                        />
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                            <p className="text-lg font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => handleDecreaseQuantity(item.id, item.color, item.size)}
                                className="p-2 rounded-full bg-gray-200"
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => handleIncreaseQuantity(item.id, item.color, item.size)}
                                className="p-2 rounded-full bg-gray-200"
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleRemoveItem(item.id, item.color, item.size)}
                                className="p-2 bg-red-500 text-white rounded-full"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-6">
                <div className="text-lg font-semibold">
                    Total: ${getTotalPrice().toFixed(2)}
                </div>
                <button
                    onClick={() => alert("Proceeding to checkout...")}
                    className="px-6 py-2 bg-black text-white rounded-full"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
