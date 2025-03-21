
const CustomButton = ({title,customClass}) => {
    return (
        <button className={`bg:white text-black max-w-[210px] w-full flex justify-center items-center cursor-pointer lg:py-[15px] py-3 transition-all ease-linear duration-300 rounded-full font-medium lg:text-base text-sm ${customClass}`}>{title}</button>
    )
}

export default CustomButton
