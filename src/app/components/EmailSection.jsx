import React from 'react'
import FacebookIcon from "../../../public/images/facebook.svg"
import InstagramIcon from "../../../public/images/instagram.svg"
import Link from 'next/link'
import Image from 'next/image'
const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 py-4 md:py-24 gap-4 relative'>
<div className='bg-gradient-to-r from-[#3BA387]  to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -right-4 transform translate-x-1/2 -translate-1/2 opacity-50'></div> 
<div className='flex flex-col justify-center z-10'>
                <h5 className='text-4xl font-bold mb-4 text-lightblue-light mt-4 '>اتصل بنا</h5>
                <p className='text-darkblue-light mb-4 max-w-md text-lg'>
                    {" "}
                    لا تتردد في الإتصال بنا؛
                    فأنت محط اهتمامنا خذ مساحة لآرءائك أو شكواك و اكتب مايجول في خاطرك وشاركنا اهتماماتك و مقترحاتك في أي مجال.
                </p>
                <div className='socials flex flex-row gap-2 '>
                    <Link href="https://www.facebook.com/share/1PsiKS4QAu/">
                        <Image width={35} height={35} src={FacebookIcon} alt="Facebook Icon" />
                    </Link>
                    <Link href="https://www.instagram.com/myfamily_foundation?igsh=MWo2dWpmZjdhM2s4Mg==">
                        <Image width={35} height={35} src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='text-lightblue-light block text-base font-semibold'>البريد الإلكتروني :</label>
                        <input className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light block w-full p-2.5'
                            type='email' id="email" placeholder='username@gmail.com' required />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='subject' className='text-lightblue-light block text-base font-semibold'>الموضوع :</label>
                        <input className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light  block w-full p-2.5'
                            type='text' id="subject" placeholder='موضوع الرسالة' required />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='text-lightblue-light block text-base font-semibold'>الرسالة :</label>
                        <textarea className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light  block w-full p-2.5'
                            name="message" id="message" placeholder='لنتحدث عن ...'  required />

                    </div>
                    <button type='submit' className=' px-3 py-1 text-base md:px-6 md:py-3 md:text-xl rounded-lg w-full  text-white-light bg-lightblue-light hover:bg-bluehover-light hover:border hover:border-lightblue-light hover:text-lightblue-light'>
                        إرسال
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection