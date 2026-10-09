import React from 'react'
import assets from '../assets/assets'

const policies = [
  {
    icon: assets.exchange_icon,
    title: 'Easy Exchange Policy',
    text: 'We offer a hassle-free exchange policy.',
  },
  {
    icon: assets.quality_icon,
    title: '3 Days Return Policy',
    text: 'We provide a 3-day free return policy.',
  },
  {
    icon: assets.support_img,
    title: 'Best Customer Support',
    text: 'We provide 24/7 customer support.',
  },
]

const OurPolicy = () => {
  return (
    <section className='py-16 sm:py-20'>
      {/* Section heading */}
      <div className='text-center mb-10 sm:mb-14'>
        <div className='flex items-center justify-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className='font-medium text-sm md:text-base text-[#414141]'>WHY SHOP WITH US</p>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
        <h2 className='prata-regular text-2xl sm:text-3xl text-[#414141] mt-3'>
          Shop with confidence
        </h2>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {policies.map((item, index) => (
          <div
            key={index}
            className='group flex flex-col items-center text-center px-6 py-10 rounded-2xl border border-gray-200 bg-white
                       transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300'
          >
            {/* Icon badge */}
            <div
              className='w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gray-100
                         transition-colors duration-300 group-hover:bg-black'
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className='w-9 transition duration-300 group-hover:invert'
              />
            </div>

            <h3 className='font-semibold text-base md:text-lg text-[#414141]'>{item.title}</h3>
            <p className='mt-2 text-sm text-gray-500 max-w-[240px]'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurPolicy