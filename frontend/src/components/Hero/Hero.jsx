import React from 'react'
import HeroImg from '../../assets/salad-cheese.png'
import PrimaryButton from '../Shared/PrimaryButton.jsx'
import BgHero from'../../assets/BgHero.jpg'

const BgStyle = {
  backgroundImage: `url(${BgHero})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
}

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className='relative z-[-1'>
        <div className="container py-16 sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                {/* text-content section */}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 className='text-5xl'>best dishes for your microbiome</h1>
                    <p className='lg:pr-64'>Eat healthier, live  longer</p>

                    {/* button section */}
                    <div>
                      <PrimaryButton/>
                    </div>
                </div>

                {/* image selection*/}
                <div className='relative z-30 order-1 sm:order-2'>
                    <img src={HeroImg} alt="" className='w-full sm:scale-90 sm:translate-y-16' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero