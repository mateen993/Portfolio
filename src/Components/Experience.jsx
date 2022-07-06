import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {
    const experiences = [
        {
            id: 1,
            src: html,
            name: 'HTML5',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            name: 'CSS3',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            name: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            name: 'React',
            style: 'shadow-blue-600'

        },
        {
            id: 5,
            src: node,
            name: 'Node',
            style: 'shadow-sky-800'

        },
        {
            id: 6,
            src: github,
            name: 'GitHub',
            style: 'shadow-gray-400'

        },
        {
            id: 7,
            src: nextjs,
            name: 'NEXTjs',
            style: 'shadow-white'

        },
        {
            id: 8,
            src: graphql,
            name: 'GraphQL',
            style: 'shadow-pink-500'

        },
        {
            id: 9,
            src: tailwind,
            name: 'Tailwind CSS',
            style: 'shadow-sky-400'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-fit pt-14'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 pt-0'>Experience</p>
            <p className='mt-2'>These are the technologies that I've worked with</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-3'>
            {/* <div className='shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-150'>
                <img src={reactSmooth} alt='' className='rounded-md'/>
            <div className='text-white w-full flex flex-row justify-between'>
                <button className='py-2'>Demo</button>
                <button className='py-2'>Code</button>
            </div>
            </div> */}
           {
            experiences.map(({id,src,name,style})=>{
               return (
                <div>
                    <div key={id} className= {`shadow-md w-[80%] rounded-lg hover:scale-110 duration-150 ${style}`} >
                        <img src={src} alt='' className='rounded-lg p-4'/>
                    </div> 
                    <div>
                        <p className='py-2 text-center w-[80%]'>{name}</p>
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

export default Experience