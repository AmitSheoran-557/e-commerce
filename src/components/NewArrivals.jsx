"use client";
import ProductCarousel from "./common/ProductCarousel";
import { NEW_ARRIVALS_DATA_LIST } from "@/utils/helper";

const NewArrivals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 400,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                },
            },
        ],
    };

    return (
        <ProductCarousel
            title="NEW ARRIVALS"
            dataList={NEW_ARRIVALS_DATA_LIST}
            settings={settings}
            buttonTitle="View All"
            discountIndexes={[1, 3]}  
        />
    );
};

export default NewArrivals;
