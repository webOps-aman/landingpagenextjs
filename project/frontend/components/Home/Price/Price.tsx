import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-16 pb-16 bg-[#edfbff]'>
        <h2 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Meet exciting Pricing Plans</h2>
        <div className='w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <PriceCard price={15} plan="Starter" />
            </div>
            <div>
                <PriceCard price={14} plan="Business"/>
            </div>
        </div>
    </div>
  )
}

export default Price