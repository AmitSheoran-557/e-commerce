import React from "react"
const CustomHeading = ({title,customClass}) => {
  return (
   <h2 className={`font-integral uppercase font-bold lg:text-5xl md:text-4xl text-[32px] !leading-[100%] text-center mx-auto text-black ${customClass}`}>{title}</h2>
  )
}

export default CustomHeading
