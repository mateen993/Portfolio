import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-5 bg-gradient-to-b from-black to-gray-800 text-white sm:h-fit pb-4'>
        <div>
            <div className='px-4'>
                <p className='font-bold text-4xl inline py-1 border-b-2'>Contact</p>
                <p className='py-3'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex flex-col w-[70%] items-center justify-center'>
                <form method='POST' action="https://getform.io/f/2327380c-d472-41fc-ae69-eef149d70935" className='flex flex-col w-[70%]  justify-center'>
                    <input type="text" name="name" placeholder="Enter your name" 
                    className='p-2 bg-transparent border-2 rounded-tr-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder="Enter your email" 
                    className='p-2 bg-transparent border-2  text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='message'
                    className='p-2 bg-transparent border-2 rounded-br-md text-white focus:outline-none'></textarea>
                    <button className='self-center mt-8 bg-gradient-to-r from-cyan-600 to to-blue-700 p-6 rounded-lg hover:scale-105 '> Let's Talk </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Contact