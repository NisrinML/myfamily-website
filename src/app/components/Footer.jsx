import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='footer border border-t-[#B8DDB5] border-l-transparent border-r-transparent text-darkblue-light'>
<div className='container p-4  px-12 flex justify-between items-center'>
<Link href={"/"} >
                 
                 <Image
                     src="/images/Logo.png"
                     alt="My Family Logo"
                     width={50}
                     height={50}
                 />

</Link>
    <p className='text-slate-600'>
        حقوق النشر محفوظة ل © <b>مؤسسة عائلتي</b> - 2025 
    </p>
</div>
   </footer>
  )
}

export default Footer