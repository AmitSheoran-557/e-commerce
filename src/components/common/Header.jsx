"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { HEADER_DATA_LIST,  } from '@/utils/helper';
import { AddToCartIcon, CrossIcon, SearchIcon } from '@/utils/icons';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handler = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (isOpen && window.innerWidth < 1025) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);

        return () => {
            document.body.classList.remove("overflow-hidden");
            window.removeEventListener("resize", handleOverflow);
        };
    }, [isOpen]);
    return (
        <div className='bg-white relative'>
            <div className="bg-black">
                <div className="flex items-center justify-center max-w-[1240px] mx-auto">
                    <p className="text-white lg:text-sm text-xs font-normal leading-[100%] text-center py-2.5">
                        Sign up and get 20% off to your first order.
                        <span className="border-b font-normal border-solid border-white cursor-pointer">
                            Sign Up Now
                        </span>
                    </p>
                    <p className="absolute lg:right-[100px] cursor-pointer max-lg:hidden lg:block">
                        <CrossIcon />
                    </p>
                </div>
            </div>
            <nav className="min-[1600px]:max-w-[1440px] max-w-[1272px] mx-auto px-4 lg:py-6 py-5">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center lg:gap-10 md:gap-7 gap-4">
                        <button onClick={handler} className="flex flex-col items-center z-[100] gap-1 lg:hidden relative w-[18px] h-[14px]" >
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`}></span>
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`md:h-1 min-h-[2px] max-md:max-h-[2px] w-full bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
                        </button>
                        <Link href="/"><h2 className="font-bold font-integral lg:text-[32px] md:text-3xl text-[25px] !leading-[100%] text-black">SHOP.CO</h2></Link>
                    </div>
                    <div className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:z-[90] transition-transform duration-300 ${isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"}`}>
                        <div className="flex items-center gap-5 max-lg:flex-col max-lg:justify-center">
                            {HEADER_DATA_LIST.map((item, i) => (
                                <Link onClick={handler} href={item.path} key={i} className='font-normal lg:text-base text-sm flex items-center gap-1 !leading-[100%] text-black cursor-pointer'>{item.title} {item.icon} </Link>
                            ))}
                        </div>
                    </div>
                        <div className="flex items-center bg-light-white gap-4 py-2.5 px-3 max-w-[577px] w-full rounded-full max-[1280px]:hidden">
                        <label htmlFor="search"> <SearchIcon /> </label>
                        <input type="text" name="search" className="placeholder:text-black/40 text-base placeholder:text-base placeholder:font-normal leading-[100%] font-normal bg-transparent w-full outline-none" placeholder="Search for products..."
                        />
                    </div>
                    <div className="flex items-center md:gap-5 gap-3">
                        <div className="xl:hidden fill-black">
                            <SearchIcon />
                        </div>
                      <Link  href="/cart" className='cursor-pointer'><AddToCartIcon /></Link>  
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header