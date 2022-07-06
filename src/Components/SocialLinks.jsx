import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {

  return (
    <div className='fixed top-[30%] left-0'>
        <ul className='lg:flex flex-col hidden '>
            <li className='w-40 flex justify-between items-center bg-slate-500/50 px-4 py-2 rounded-tr ml-[-120px] hover:ml-[-10px]
            duration-150 '>
                <a target='_blank' rel="noreferrer" href='https://github.com/mateen993' className='flex justify-between items-center w-full text-gray-100'>
                    <>
                    GitHub <FaGithub />
                    </>
                </a>    
            </li>

            <li className='w-40 flex justify-between items-center bg-slate-500/50 px-4 py-2  ml-[-120px] hover:ml-[-10px]
            duration-150'>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/abdul-mateen-b7795b200/' className='flex justify-between items-center w-full text-gray-100'>
                    <>
                    LinkedIn <FaLinkedin />
                    </>
                </a>    
            </li>

            <li className='w-40 flex justify-between items-center bg-slate-500/50 px-4 py-2  ml-[-120px] hover:ml-[-10px]
            duration-150'>
                <a target='_blank' rel="noreferrer" href='mailto:mateenabdul993@gmail.com' className='flex justify-between items-center w-full text-gray-100'>
                    <>
                    mail <HiOutlineMail />
                    </>
                </a>    
            </li>

            <li className='w-40 flex justify-between items-center bg-slate-500/50 px-4 py-2 rounded-br 
            ml-[-7.5rem] hover:ml-[-10px]
            duration-150'>
                <a download={true} target='_blank' rel="noreferrer" href={`./Abdul's Resume.pdf`} className='flex justify-between items-center w-full text-gray-100 '>
                    <>
                    Resume <BsFillPersonLinesFill/>
                    </>
                </a>    
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks