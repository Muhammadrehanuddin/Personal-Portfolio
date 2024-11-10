import React from 'react'

interface propstype {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propstype> = ({title,}) => {
  return (
    <div className='border border-accent w-[300px sm:[350px]'data-aos="zoom-in-up">
      <div>
        
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>
          {title} </div>
          

      </div>
      
    </div>
  )
}

export default Card
