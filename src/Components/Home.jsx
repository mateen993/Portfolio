import React from 'react'
import abdulMateen from '../assets/New Pic.jpg'
import {HiArrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white '>
        <div className='max-w-screen-lg mx-auto flex flex-col px-4 items-center justify-center h-full md:flex-row '>
            <div>
                <h2 className='text-4xl text-sky-400 md:text-7xl  font-bold mb-2'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-200 max-w-md py-4'>
                    I have 1 year of experience in building and designing
                    software. Currently, I love to work on web application using
                    technologies like React, Tailwind CSS, Express, NEXT js.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group flex flex-row items-center px-4 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit cursor-pointer'>
                        Portfolio
                        <span className='px-2 group-hover:rotate-90 duration-300'>
                            <HiArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={abdulMateen} alt="my profile" className='hover:scale-105 duration-200 rounded-2xl w-[45%] md:w-[90%] mx-auto mt-4'  />
            </div>  
        </div>
    </div>
  )
}

export default Home