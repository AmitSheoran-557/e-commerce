"use client";
import ProductCarousel from "./common/ProductCarousel";
import { ALSO_LIKE_DATA_LIST } from "@/utils/helper";

const AlsoLikeProducts = () => {
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
        <div className="lg:pb-[168px] pb-[195px]">
            <ProductCarousel
                title="You might also like"
                dataList={ALSO_LIKE_DATA_LIST}
                settings={settings}
                showButton={false}
                showLine={false}
                discountIndexes={[0, 3]}
            />
        </div>
    );
};

export default AlsoLikeProducts;
