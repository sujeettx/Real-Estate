import React, { useState, useEffect } from 'react'
import {assets, testimonialsData} from '../assets/assets'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-slide effect for mobile
  useEffect(() => {
    if (!isMobile || testimonialsData.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  },)

  return (
    <div className='container mx-auto py-6 lg:py-10 px-4 lg:px-32 w-full overflow-hidden mt-0' id='Testimonials'>
      <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-center'>
        Customer 
        <span className='underline underline-offset-4 decoration-1 font-light'> Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-6 lg:mb-12 max-w-80 mx-auto text-sm sm:text-base'>
        Real Stories From those Who found Home With Us
      </p>
      
      {/* Mobile View - Single sliding card */}
      <div className='block sm:hidden'>
        <div className='relative overflow-hidden'>
          <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index}
                className='w-full flex-shrink-0 px-2'
              >
                <div className='border shadow-lg rounded-lg p-4 text-center bg-white hover:shadow-xl transition-shadow duration-300'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className='w-12 h-12 rounded-full mx-auto mb-3 object-cover'
                  />
                  <h2 className='text-base text-gray-700 font-medium mb-1'>
                    {testimonial.name}
                  </h2>
                  <p className='text-gray-500 mb-3 text-xs'>{testimonial.title}</p>
                  <div className='flex justify-center gap-1 text-red-500 mb-3'>
                    {Array.from({length: testimonial.rating}, (item, index) => (
                      <img
                        key={index}
                        src={assets.star_icon}
                        alt='rating'
                        className='w-3 h-3'
                      />
                    ))}
                  </div>
                  <p className='text-gray-600 text-xs leading-relaxed line-clamp-4'>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator for mobile */}
        <div className='flex justify-center mt-4 gap-2'>
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Grid layout (unchanged) */}
      <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index}
            className='border shadow-lg rounded-lg p-4 lg:p-6 text-center bg-white hover:shadow-xl transition-shadow duration-300'
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className='w-12 h-12 lg:w-16 lg:h-16 rounded-full mx-auto mb-3 object-cover'
            />
            <h2 className='text-base lg:text-lg text-gray-700 font-medium mb-1'>
              {testimonial.name}
            </h2>
            <p className='text-gray-500 mb-3 text-xs lg:text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-3'>
              {Array.from({length: testimonial.rating}, (item, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt='rating'
                  className='w-3 h-3 lg:w-4 lg:h-4'
                />
              ))}
            </div>
            <p className='text-gray-600 text-xs lg:text-sm leading-relaxed line-clamp-4'>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials