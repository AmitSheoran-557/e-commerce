"use client";
import ProductCarousel from "./common/ProductCarousel";
import { TOP_SELLING_DATA_LIST } from "@/utils/helper";

const TopSelling = () => {
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
                    autoplaySpeed: 400,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <ProductCarousel
            title="TOP SELLING"
            dataList={TOP_SELLING_DATA_LIST}
            settings={settings}
            buttonTitle="View All"
            discountIndexes={[0]} // Show discount on the first item in TopSelling
        />
    );
};

export default TopSelling;
