"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";  
import CustomHeading from "./CustomHeading";
import CustomButton from "./CustomButton";

const ProductCarousel = ({ title, dataList, settings, buttonTitle, discountIndexes, showButton = true, showLine = true  }) => {
    const router = useRouter();

    const handleCardClick = (item) => {
        localStorage.setItem("selectedProduct", JSON.stringify(item));
        router.push(`/product-details`);
    };

    return (
        <div className="flex justify-center items-center w-full lg:mt-[72px] md:mt-14 mt-[50px]">
            <div className="max-w-[1272px] w-full px-4 mx-auto">
                <CustomHeading customClass={"xl:!pb-[55px] lg:!pb-10 !pb-8"} title={title} />
                <div className="w-full mx-auto lg:mb-9 md:mb-8 mb-6">
                    <Slider {...settings}>
                        {dataList.map((item, index) => (
                            <div key={index} onClick={() => handleCardClick(item)} className="cursor-pointer">
                                <Image src={item.image} alt={item.alt} className="max-w-[295px] max-h-[298px] w-full rounded-lg lg:mb-4 mb-2.5" width={295} height={298} />
                                <h3 className="lg:text-xl md:text-lg text-base !leading-[100%] font-bold lg:mb-2 mb-1">{item.title}</h3>
                                <div className="flex items-center lg:gap-[13px] gap-2 lg:mb-2 md:mb-1 mb-[3px]">
                                    <Image className={`max-w-[104px] w-full ${index === 1 ? '!max-w-[80px]' : ''}`} src={item.starImage} alt="star" width={104} height={18} />
                                    <p className="!leading-[100%] lg:text-sm text-xs flex items-center">
                                        {item.rating} <span className="text-black/60">{item.totalRating}</span>
                                    </p>
                                </div>
                                <p className="font-bold !leading-[100%] lg:text-2xl text-xl flex items-center lg:gap-2.5 md:gap-2 gap-[5px]">
                                    ${item.price}{" "}
                                    <span className="text-black/40 align-middle line-through">{item.originalPrice}</span>{" "}
                                    {discountIndexes.includes(index) && (
                                        <span className={`md:text-xs text-[10px] text-red !font-medium bg-light-red px-[13px] py-1.5 rounded-full`}>
                                            {item.discount}
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
                  {/* Conditionally render the CustomButton */}
                  {showButton && (
                    <CustomButton customClass="border-black/10 border mx-auto sm:!max-w-[218px] !max-w-full hover:!bg-black hover:!text-white" title={buttonTitle}/>
                )}

                {/* Conditionally render the line */}
                {showLine && (
                    <div className="w-full h-[1px] bg-black/10 xl:my-16 md:my-12 my-10"></div>
                )}
            </div>
        </div>
    );
};

export default ProductCarousel;
