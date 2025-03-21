import { PARTNER_BRANDS_DATA_LIST } from '@/utils/helper'
import React from 'react'

const PartnerBrands = () => {
  return (
    <div className='w-full flex justify-center items-center bg-black'>
      <div className="max-w-[1272px] w-full mx-auto px-4">
        <div className="flex flex-wrap xl:gap-x-[106px] lg:gap-x-20 md:gap-x-14 sm:gap-x-11 gap-x-[34px] gap-y-[22px] justify-center items-center lg:py-11 py-10">

          {PARTNER_BRANDS_DATA_LIST.map((item, index) => (
            <img src={item.image} alt={item.alt} key={index} className={`${index === 0 ? 'xl:max-w-[166px] lg:max-w-32 max-w-[116px] w-full' : ''}${index === 1 ? 'xl:max-w-[91px] lg:max-w-20 max-w-[63px] w-full' : ''}${index === 2 ? 'xl:max-w-[156px] lg:max-w-32 max-w-[109px] w-full' : ''}${index === 3 ? 'xl:max-w-[194px] lg:max-w-40 max-w-[127px] w-full' : ''}${index === 4 ? 'xl:max-w-[206px] lg:max-w-40 max-w-[134px] w-full' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerBrands
