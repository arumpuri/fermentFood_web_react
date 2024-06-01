import React from 'react'
import HeroImg from '../../assets/salad-cheese.png'

const Hero = () => {
  return (
    <>
      <div className='relative z-[-1'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                {/* text-content section */}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 className='text-5xl'>best dishes for your microbiome</h1>
                    <p className='lg:pr-64'>Eat healthier, live  longer</p>
                </div>
                {/* image selection*/}
                <div className='order-1 sm:order-2'>
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero