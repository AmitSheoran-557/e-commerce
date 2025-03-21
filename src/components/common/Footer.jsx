"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FOOTER_LIST, FOOTER_PAYMENT_BADGE_LIST, SOCIAL_LIST } from "@/utils/helper";
import { GmailIcon } from "@/utils/icons";
import CustomHeading from "./CustomHeading";
import CustomButton from "./CustomButton"; // Add this if you're using CustomButton elsewhere  
import Image from "next/image";

const Footer = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: "", text: "" });

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setMessage({
                type: "error",
                text: "Please enter a valid email address.",
            });
            setIsLoading(false);
            return;
        }

        try {
            const response = await emailjs.send("service_mmofsl2", "template_dkufmac", { email: formData.email }, "Ggsx27iufj9XQ5N3d");
            if (response.status === 200) {
                setMessage({ type: "success", text: "Email sent successfully!" });
                setFormData({ email: "" });
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to send email. Please try again.",
                });
            }
        } catch (error) {
            console.error("Email sending error:", error);
            setMessage({
                type: "error",
                text: "An error occurred. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-light-white">
            <div className="relative mx-[17px]">
                <div className="bg-black lg:py-9 max-lg:pt-8 max-lg:pb-7 xl:px-[64px] lg:px-14 md:px-10 sm:px-8 px-6 w-full max-w-[1240px] xl:mx-auto rounded-4xl absolute lg:top-[-90px] top-[-190px] left-0 right-0">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="lg:w-6/12 w-full">
                            <CustomHeading title="STAY UP TO DATE ABOUT OUR LATEST OFFERS" customClass="!text-white !text-left lg:!text-[40px] max-w-[551px]" />
                        </div>
                        <div className="lg:w-6/12 w-full flex justify-center lg:mt-0 mt-8">
                            <form noValidate onSubmit={handleSubmit} ref={formRef} className="flex max-w-max items-center flex-col">
                                <div className="flex items-center gap-4 bg-white w-full px-5 h-[48px] sm:min-w-[349px] min-w-[311px] border border-solid border-white rounded-full">
                                    <GmailIcon />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="outline-none w-full bg-transparent text-base leading-[100%] font-normal placeholder:font-normal text-black/40 placeholder:text-black/40"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-black cursor-pointer bg-white w-full h-[48px] sm:min-w-[349px] min-w-[311px] text-base font-normal rounded-full lg:mt-[14px] mt-3"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Sending..." : "Subscribe to Newsletter"}
                                </button>
                                {message.text && (
                                    <p className={`mt-2 text-sm ${message.type === "error" ? "text-red-500" : "text-green-500"}`}> {message.text}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="">
                    <div className="flex justify-between flex-wrap pt-[140px] max-w-[1240px] mx-auto">
                        <div className="flex flex-col">
                            <Link href="/">
                                <h2 className="font-bold font-integral lg:text-[32px] md:text-3xl text-[25px] !leading-[100%] text-black">SHOP.CO</h2>
                            </Link>
                            <p className="pt-6 max-w-[248px] text-sm leading-[22px] font-normal text-black/60">
                                We have clothes that suit your style and that you’re proud to wear. From women to men.
                            </p>
                            <div className="flex items-center mt-[35px] gap-3">
                                {SOCIAL_LIST.map((obj, i) => (
                                    <Link key={i} target="_blank" href={obj.link} className="flex items-center justify-center bg-white rounded-full min-w-[28px] h-[28px]">
                                        <span>{obj.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between gap-[140px] flex-wrap max-xl:gap-24 max-lg:gap-14 max-md:gap-10 xl:mt-0 mt-6">
                            {FOOTER_LIST.map((obj, i) => (
                                <div key={i}>
                                    <h3 className="font-medium text-base leading-[18px] uppercase mb-[26px]">
                                        {obj.title}
                                    </h3>
                                    <ul>
                                        {[obj.name, obj.nameTwo, obj.nameThree, obj.nameFour].map((name, index) => (
                                            <li key={index} className="text-black/60 font-normal text-base leading-[19px] py-1">
                                                <Link href="#">{name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </footer>
                <div className="w-full mx-auto max-w-[1240px] border border-solid lg:mt-[50px] mt-10 lg:mb-5 mb-4 border-black/10"></div>
                <div className="flex flex-wrap justify-between items-center lg:gap-0 gap-4 max-w-[1272px] px-4 mx-auto lg:pb-20 pb-[77px]">
                    <p className="text-black/60 text-sm">Shop.co © 2000-{new Date().getFullYear()} , All Rights Reserved</p>
                    <div className="flex lg:gap-3 gap-2.5">
                        {FOOTER_PAYMENT_BADGE_LIST.map((obj, i) => (
                                <Link key={i} target="_blank" href="/" >
                                    <Image className="lg:max-w-[46px] max-w-[39px] max-lg:h-[25px] hover:scale-110 transition-all ease-linear duration-300" src={obj.image} alt={obj.alt} width={46} height={30} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;  