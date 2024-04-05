import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='py-12'>
            <h1 className='text-4xl font-semibold'>Everything is better with a&nbsp; <span className='text-primary'>Pizza</span></h1>
            <p className='my-6 py-4 text-gray-500'>
                Discover Delectable Delights: Dive into Our World of Handcrafted Pizzas, Fresh Toppings, and Irresistible Flavors - <span className='font-semibold'>Order Now!</span>
            </p>
            <div className='flex gap-3 text-sm'>
                <button className='bg-primary items-center shadow-lg uppercase flex gap-2 rounded-full px-4 py-2 text-white'>
                    Order Now
                    <Right/>
                </button>
                <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
                    Learn More
                    <Right/>
                </button>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt='Pizza'/>
        </div>
    </section>
  )
}

export default Hero