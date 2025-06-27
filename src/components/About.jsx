import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
            id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>
                Passionate About Properties, Dedicated to Your Vision
            </p>
            <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-20'>
                <img src={assets.brand_img} alt='' className='w-full sm:w-4/5 lg:w-1/2 max-w-lg h-auto lg:min-h-[410px] object-cover rounded-lg' />
                <div className='flex flex-col items-center lg:items-start mt-10 lg:mt-0 text-gray-600 lg:justify-center lg:h-full'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full mb-8'>
                        <div className='text-center lg:text-left'>
                            <p className='text-3xl md:text-4xl font-medium text-gray-800'>10+</p>
                            <p className='text-sm md:text-base'>Years of Excellence</p>
                        </div>
                        <div className='text-center lg:text-left'>
                            <p className='text-3xl md:text-4xl font-medium text-gray-800'>12+</p>
                            <p className='text-sm md:text-base'>Projects Completed</p>
                        </div>
                        <div className='text-center lg:text-left'>
                            <p className='text-3xl md:text-4xl font-medium text-gray-800'>21+</p>
                            <p className='text-sm md:text-base'>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div className='text-center lg:text-left'>
                            <p className='text-3xl md:text-4xl font-medium text-gray-800'>25+</p>
                            <p className='text-sm md:text-base'>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-6 lg:my-8 max-w-lg text-center lg:text-left text-sm md:text-base leading-relaxed'>
                        Welcome to our Estate Project, where modern living meets thoughtful design. Discover premium spaces with eco-friendly infrastructure, prime locations, and unmatched comfort.
                    </p>
                    <button className='rounded py-2 px-6 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 text-sm md:text-base'>
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About