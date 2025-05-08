import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({imgUrl,title,description,faceUrl,instaUrl}) => {
  return (
    <div>
        {imgUrl&&<div
        className='h-52  md:h-72 rounded-t-xl relative group'
        style={{background:`url(${imgUrl})`,backgroundSize:"cover"}}>
        <div className='overlay flex items-center justify-center gap-2 absolute top-0 left-0 h-full w-full bg-[#d2edd0] bg-opacity-0 hidden
        group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link href={faceUrl} rel="noopener noreferrer" target="_blank"  className='h-14 w-14 border-2 relative rounded-full border-[#166088] hover:bg-white-light'>
          <Image src="/images/facebook.svg" height={35} width={35} alt="Facebook Icon"
          className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' />
          </Link>
          <Link  href={instaUrl}  rel="noopener noreferrer" target="_blank" className='h-14 w-14 border-2 relative rounded-full border-[#166088] hover:bg-white-light'>
          <Image src="/images/instagram.svg" height={35} width={35} alt="Instagram Icon"
          className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' />
          </Link>
        </div>
        </div>}
        <div className='text-darkblue-light rounded-b-xl py-4 px-4 '>
            <h5 className='text-darkgreenhover-light text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-base'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard