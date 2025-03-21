"use client";
import Slider from "react-slick";
import CustomHeading from "./common/CustomHeading";
import { HAPPY_CUSTOMERS_DATA_LIST, } from "@/utils/helper";
import Image from "next/image";

const HappyCustomers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="min-[1600px]:max-w-[1440px] max-w-[1272px] mx-auto w-full px-4">
                <CustomHeading customClass={"xl:!pb-10 lg:pb-8 md:pb-7 !pb-6 !text-left !mx-none"} title="OUR HAPPY CUSTOMERS" />
            </div>
            <div className="flex flex-col max-w-[1440px] mx-auto justify-center items-center md:pb-[170px] pb-[184px] w-full">
                <div className="w-full mx-auto lg:mb-9 md:mb-8 mb-6 customer-slider">
                    <Slider {...settings}>
                        {HAPPY_CUSTOMERS_DATA_LIST.map((item, index) => (
                            <div key={index} className="border border-black/10 pt-7 px-8 flex pb-[50px] xl:min-w-[400px] max-w-[400px] w-full lg:h-[240px] rounded-[20px]">
                                <Image className="lg:mb-[15px] mb-3" src={item.starsImage} alt={item.alt} width={138} height={22} />
                                <div className="flex items-center gap-1 lg:mb-4 md:mb-3 mb-2">
                                    <h4 className="font-bold lg:text-xl md:text-lg text-base !leading-[100%]">{item.name}</h4>
                                    <span>{item.tickIcon}</span>
                                </div>
                                <p className="lg:text-base text-sm !leading-[150%] text-black/60 w-full">{item.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};
export default HappyCustomers;