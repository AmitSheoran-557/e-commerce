"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DecreaseIcon, DownArrowIcon, GreenTickIcon, IncreaseIcon, SettingsIcon, ThreeDotsIcon } from "@/utils/icons";
import { REVIEWS_DATA_LIST } from "@/utils/helper";
import CustomButton from "./common/CustomButton";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("details");
    const [reviews, setReviews] = useState(REVIEWS_DATA_LIST);
    const [sortOrder, setSortOrder] = useState("latest");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedProduct = localStorage.getItem("selectedProduct");
        if (storedProduct) {
            const selectedProduct = JSON.parse(storedProduct);
            setProduct(selectedProduct);
            setMainImage(selectedProduct.image);
        } else {
            router.push("/");
        }
    }, [router]);

    useEffect(() => {
        const sortedReviews = [...reviews].sort((a, b) => {
            if (sortOrder === "latest") {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        });
        setReviews(sortedReviews);
    }, [sortOrder]);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert("Please select color and size.");
            return;
        }

        const cartItem = {
            id: product.id,
            title: product.title,
            image: product.image,
            color: selectedColor,
            size: selectedSize,
            price: product.price,
            quantity: quantity,
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the item already exists in the cart
        const exists = cart.some((item) => item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size);

        if (!exists) {
            // Add new item to the cart
            cart.push(cartItem);
        } else {
            // Update quantity if the item already exists
            cart = cart.map((item) =>
                item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size
                    ? { ...item, quantity: item.quantity + cartItem.quantity }
                    : item
            );
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Optionally, show a toast or message
        alert("Item added to cart");
    };

    const handleIncreaseQuantity = () => setQuantity(quantity + 1);
    const handleDecreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSortOptionClick = (option) => {
        setSortOrder(option);
        setIsDropdownOpen(false);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="max-w-[1272px] w-full px-4 mx-auto mt-9">
            <div className="w-full h-[1px] bg-black/10 mb-6"></div>
            <div className="flex mb-20 flex-wrap justify-center">
                <div className="lg:w-6/12 w-full flex justify-center">
                    <div className="flex max-lg:flex-col-reverse gap-[14px]">
                        <div className=" flex lg:flex-col md:gap-4 gap-3 max-lg:justify-center">
                            {product.sideImages.map((image, index) => (
                                <Image key={index} src={image} alt={`Side Image ${index}`} className="cursor-pointer rounded-[20px] lg:max-w-[152px] md:max-w-32 max-w-[111px] w-full " width={152} height={167} onClick={() => handleImageClick(image)} />
                            ))}
                        </div>
                        <Image src={mainImage} alt={product.title} className="w-full max-w-[444px] xl:max-h-[530px] lg:max-h-[450px] h-full rounded-[20px]" width={444} height={530} />
                    </div>
                </div>

                <div className="lg:w-6/12 w-full flex flex-col items-center">
                    <div className=" lg:mt-0 md:mt-7 mt-5 lg:pl-10">
                        <h1 className="xl:text-[40px] lg:text-3xl text-2xl font-bold font-integral !leading-[100%]">{product.title}</h1>
                        <div className="flex items-center md:mt-[14px] mt-3">
                            <div className="flex"> <Image className={`max-w-[139px] w-full `} src={product.starImage} alt="star" width={104} height={18} /> </div>
                            <p className="ml-4 lg:text-base text-sm">{product.rating}<span className="text-black/60">5</span></p>
                        </div>
                        <div className="flex items-center md:mt-[14px] mt-3">
                            <p className="lg:text-[32px] text-2xl font-bold !leading-[100%] text-black">${product.price}</p>
                            {product.discount && (
                                <span className="text-black/30 align-middle !leading-[100%] line-through ml-3 lg:text-[32px] text-2l font-bold">{product.originalPrice}</span>
                            )}
                            {product.discount && (
                                <span className="md:text-xs text-[10px] text-red !font-medium bg-light-red px-[13px] py-1.5 rounded-full ml-3">{product.discount}</span>
                            )}
                        </div>
                        <p className="lg:text-base text-sm mt-5 mb-6 max-w-[590px] w-full !leading-[130%] text-black/60">{product.description}</p>
                        <div className="w-full max-w-[590px] bg-black/10 h-[1px] mb-6"></div>
                        <div className="mt-8">
                            <h2 className="lg:text-base text-sm text-black/60">Select Colors</h2>
                            <div className="flex md:gap-4 gap-3 mt-4">
                                {product.colors.map((color, index) => (
                                    <div key={index} className={`w-[37px] h-[37px] rounded-full cursor-pointer border-2 border-gray-300 ${selectedColor === color ? 'border-black' : ''}`} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)} />
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[590px] bg-black/10 h-[1px] my-6"></div>
                        <div>
                            <h2 className="lg:text-base text-sm text-black/60 !leading-[100%]">Choose Size</h2>
                            <div className="flex md:gap-3 gap-2 mt-4">
                                {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                                    <button key={index} className={`lg:py-3 py-2.5 lg:px-6 px-5 rounded-[62px] lg:text-base text-sm ${selectedSize === size ? "bg-black text-white" : "bg-light-white text-black/60 "}`} onClick={() => setSelectedSize(size)}> {size}</button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[590px] bg-black/10 h-[1px] my-6"></div>
                        <div className="flex lg:gap-5 gap-3 items-center w-full">
                            <div className="flex items-center xl:gap-[38px] lg:gap-8 md:gap-6 gap-3 lg:py-[14px] py-3 lg:px-5 px-4 bg-light-white xl:max-w-[170px] max-w-max w-full rounded-full">
                                <button className="cursor-pointer" onClick={handleDecreaseQuantity}> <DecreaseIcon /> </button>
                                <span className="lg:text-base text-sm">{quantity}</span>
                                <button className="cursor-pointer" onClick={handleIncreaseQuantity}><IncreaseIcon /> </button>
                            </div>
                            <button onClick={handleAddToCart} className="rounded-full cursor-pointer bg-black text-white py-3 xl:max-w-[400px] lg:max-w-sm md:max-w-xs max-w-[236px] w-full px-6 hover:bg-transparent border hover:border-black border-transparent hover:text-black transition-all ease-linear duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-6">
                <div className="flex w-full max-w-[1240px] justify-between">
                    <button className={`py-2 whitespace-nowrap pe-4 w-[414px] text-center xl:text-xl lg:text-lg text-base cursor-pointer ${activeTab === "details" ? " text-black border-b-2 border-black transition-all ease-linear duration-300" : " border-b-2 border-black/10 text-black/60"}`} onClick={() => setActiveTab("details")}> Product Details </button>
                    <button className={`py-2 whitespace-nowrap px-4 w-[414px] text-center xl:text-xl lg:text-lg text-base cursor-pointer ${activeTab === "ratingReview" ? " text-black border-b-2 border-black transition-all ease-linear duration-300" : " border-b-2 border-black/10 text-black/60"}`} onClick={() => setActiveTab("ratingReview")}> Rating & Reviews </button>
                    <button className={`py-2 whitespace-nowrap ps-4 w-[414px] text-center xl:text-xl lg:text-lg text-base cursor-pointer ${activeTab === "faq" ? " text-black border-b-2 border-black transition-all ease-linear duration-300" : " border-b-2 border-black/10 text-black/60"}`} onClick={() => setActiveTab("faq")}>  FAQs </button>
                </div>
            </div>
            {activeTab === "details" && (
                <div className="product-details-content"> <p className="lg:text-3xl text-2xl py-4 text-center">Product details coming soon...</p> </div>
            )}
            {activeTab === "ratingReview" && (
                <div>
                    <div className="flex justify-between lg:mb-[29px] mb-5">
                        <h3 className="lg:text-2xl text-xl font-bold">All Reviews <span className="lg:text-base text-sm text-black/60 font-normal">(451)</span></h3>
                        <div className="relative lg:block max-lg:hidden">
                            <div className="flex gap-5 xl:h-12 justify-center items-center bg-light-white rounded-full !leading-[100%] py-[13px] px-5 cursor-pointer" onClick={handleDropdownClick}>
                                {sortOrder === "latest" ? "Latest" : "Oldest"} <DownArrowIcon />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute top-[50px] right-0 bg-white shadow-xl rounded-md w-32 py-2">
                                    <button onClick={() => handleSortOptionClick("latest")} className="block px-4 py-2">Latest</button>
                                    <button onClick={() => handleSortOptionClick("oldest")} className="block px-4 py-2">Oldest</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {reviews.length > 0 ? (
                        <div className="space-y-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="p-6 border rounded-md">
                                    <div className="flex items-center mb-4">
                                        <Image className="rounded-full" src={review.userImage} alt="user" width={40} height={40} />
                                        <div className="ml-4">
                                            <h4 className="font-semibold">{review.username}</h4>
                                            <div className="flex">{Array.from({ length: 5 }).map((_, i) => (i < review.rating ? <GreenTickIcon key={i} /> : <ThreeDotsIcon key={i} />))}</div>
                                        </div>
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
