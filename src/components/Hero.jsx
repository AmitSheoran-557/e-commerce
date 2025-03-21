import CustomButton from "./common/CustomButton"
import Header from "./common/Header"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="bg-wheat">
            <Header />
            <div className="min-[1600px]:max-w-[1440px] max-w-[1272px] px-4 w-full mx-auto overflow-hidden">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="lg:w-6/12 w-full">
                        <h1 className="uppercase font-integral max-xl:max-w-3xl max-lg:max-w-2xl font-bold xl:text-[64px] md:text-5xl text-4xl !leading-[100%] lg:mb-8 md:mb-7 sm:mb-6 mb-5 max-xl:pt-10">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="text-black/60 lg:text-base text-sm max-w-[555px] font-normal w-full lg:mb-8 md:mb-7 mb-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <CustomButton customClass={"!bg-black max-sm:!max-w-full !text-white hover:!bg-transparent hover:!text-black hover:!border-black border-transparent border xl:mb-12 lg:mb-10 md:mb-7 mb-5"} title="Shop Now" />
                        <div className="flex xl:max-w-[596px] md:max-w-xl sm:max-w-lg max-sm:max-w-xs max-sm:mx-auto w-full justify-between mt-12 max-sm:mt-5 flex-wrap max-md:justify-center max-md:gap-3">
                            <div className="max-md:flex flex xl:gap-8 lg:gap-4 gap-7 max-md:justify-center">
                                <div className="flex flex-col">
                                    <h3 className="font-bold xl:text-[40px] lg:text-3xl text-2xl leading-[100%]">
                                        200+
                                    </h3>
                                    <p className="font-normal text-base leading-[22px] text-black/60 max-md:text-xs">
                                        International Brands
                                    </p>
                                </div>
                                <div className="h-[74px] border-black/10 border border-solid max-md:h-[52px]"></div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold xl:text-[40px] lg:text-3xl text-2xl leading-[100%]">
                                        2,000+
                                    </h3>
                                    <p className="font-normal text-base leading-[22px] text-black/60 max-md:text-xs">
                                        High-Quality Products
                                    </p>
                                </div>
                            </div>
                            <div className="h-[74px] border-black/10 border border-solid max-sm:hidden"></div>
                            <div className="flex flex-col">
                                <h3 className="font-bold xl:text-[40px] lg:text-3xl text-2xl leading-[100%]">
                                    30,000+
                                </h3>
                                <p className="font-normal text-base leading-[22px] text-black/60 max-md:text-xs">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full flex justify-center items-center">
                        <Image className="xl:max-w-[671px] lg:max-w-lg max-w-md w-full sm:block max-sm:hidden" src="/assets/images/png/hero-men-img.png" width={671} height={663} alt="hero-img" />
                        <Image className="max-w-xs w-full sm:hidden max-sm:block max-sm:min-w-[390px]" src="/assets/images/png/hero-sm-men-img.png" width={671} height={663} alt="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
