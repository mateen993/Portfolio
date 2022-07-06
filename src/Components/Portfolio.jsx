import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg' 
import installNode from '../assets/portfolio/installNode.jpg' 
import navbar from '../assets/portfolio/navbar.jpg' 
import reactParallax from '../assets/portfolio/reactParallax.jpg' 
import reactSmooth from '../assets/portfolio/reactSmooth.jpg' 
import usestate from '../assets/portfolio/usestate.jpg' 
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: usestate
        }
    ]
  return (
    <div name="portfolio" className='px-2 bg-gradient-to-b to-gray-800 from-black w-full text-white md:h-screen pt-14'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 pt-0'>Portfolio</p>
                <p className='mt-2'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-4 px-3'>
                {/* <div className='shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-150'>
                    <img src={reactSmooth} alt='' className='rounded-md'/>
                <div className='text-white w-full flex flex-row justify-between'>
                    <button className='py-2'>Demo</button>
                    <button className='py-2'>Code</button>
                </div>
                </div> */}
               {
                portfolios.map(({id,src})=>{
                   return (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-150'>
                        <img src={src} alt='' className='rounded-md'/>
                        <div className='text-white w-full flex flex-row justify-between'>
                            <button className='py-2'>Demo</button>
                            <button className='py-2'>Code</button>
                    </div>
                    </div> 
                    )
                })
               }
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio