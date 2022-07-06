import React from 'react'
import { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {
    const size = 30;
    const [nav,setNav] = useState(false)  
    const links = [
        {
        id: 1,
        link: 'home'
        },
        {
        id: 2,
        link: 'about'
        },
        {
        id: 3,
        link: 'portfolio'
        },
        {
        id: 4,
        link: 'experience'
        },
        {
        id: 5,
        link: 'contact'
        }
    ]
  return (
    <div className=' fixed z-10 flex justify-between items-center w-full px-4 h-20 capitalize bg-black text-white border-b-2 border-gray-800'>
        <div className='ml-2'>
            <h1 className=' text-5xl font-signature'>
               @Mateen
            </h1>
        </div>

        <ul className='hidden md:flex justify-between '>
            {
                links.map(({id, link}) =>{
                    return <li key={id} className='px-4 cursor-pointer hover:scale-x-110 duration-200 text-gray-300'>
                       <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                })
            }
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer text-gray-400 z-10 pr-4 md:hidden'> 
            {nav ? <FaTimes size={size} /> : <FaBars size={size} /> }
        </div>
        {nav && (<ul className='flex flex-col justify-start items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 bg-transparent'>
            {/* <li className='px-4 cursor-pointer capitalize py-6 text-2xl'> home</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-2xl'> about</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-2xl'> contact</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-2xl'> portfolio</li>
            <li className='px-4 cursor-pointer capitalize py-6 text-2xl'> experience</li> */}
            {
                links.map(({id, link}) =>{
                    return <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                      <Link onClick={()=> setNav(false)} to={link} smooth duration={500}>{link}</Link>  
                    </li>
                })
            }
            
           
        </ul>)}
       
    </div>
    
  )
}

export default Navbar