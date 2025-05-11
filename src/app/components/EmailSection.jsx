"use client";
import React, { useRef, useState } from 'react'
import FacebookIcon from "../../../public/images/facebook.svg"
import InstagramIcon from "../../../public/images/instagram.svg"
import Link from 'next/link'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import PhoneIcon from '../../../public/images/phone.svg'
import LocationIcon from '../../../public/images/location.svg'
import GmailIcon from '../../../public/images/gmail.svg'
const contactInfo=[
    {
        id:1,
        text:'سوريا، حمص، الدبلان',
        icon:LocationIcon,
        alt:'Location Icon'
    },
    {
        id:2,
        text:'(+963) 992 424 959',
        icon:PhoneIcon,
        alt:'Phone Icon'
    },
    {
        id:3,
        text:'foundationmyfamily@gmail.com',
        icon:GmailIcon,
        alt:'Email Icon'
    },
]
const EmailSection = () => {
    const ref = useRef()
    const [error, setError] = useState(false)
    const [msg,setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); 
        emailjs
            .sendForm('service_ujfogei', 'template_wz1fddr', ref.current, {
                publicKey: '9c9S3wamf04mn793p',
            })
            .then(
                () => {
                    setMsg('تم إرسال الرسالة بنجاح !')
                    setError(false)
                    setIsLoading(false); 
                    console.log('SUCCESS!');

                    const nameInput = document.getElementsByName('name')[0];
                    const emailInput = document.getElementsByName('email')[0];
                    const messageInput = document.getElementsByName('message')[0];
            
                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';
                },
                (error) => {
                    setMsg("حدث خطأ أثناء الإرسال. يرجى التأكد من البيانات ثم إعادة المحاولة لاحقاً !")
                    setError(true)
                    setIsLoading(false); 
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section className='grid md:grid-cols-2 my-12 py-4 md:py-12 gap-4 relative' id="Contact">
            <div className='bg-gradient-to-r from-[#3BA387]  to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -right-4 transform translate-x-1/2 -translate-1/2 opacity-50'></div>
            <div className='flex flex-col justify-center z-10'>
                <h5 className='text-4xl font-bold mb-4 text-lightblue-light mt-4 '>اتصل بنا</h5>
                <p className='text-darkblue-light mb-2 max-w-md text-lg'>
                    {" "}
                    لا تتردد في الإتصال بنا؛
                    فأنت محط اهتمامنا خذ مساحة لآرءائك أو شكواك و اكتب مايجول في خاطرك وشاركنا اهتماماتك و مقترحاتك في أي مجال.
                </p>
                <div className='socials flex flex-row gap-2 '>
                    <Link  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/share/1PsiKS4QAu/">
                        <Image width={35} height={35} src={FacebookIcon} alt="Facebook Icon" />
                    </Link>
                    <Link  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/myfamily_foundation?igsh=MWo2dWpmZjdhM2s4Mg==">
                        <Image width={35} height={35} src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                </div>
                <div className='flex flex-col my-8 md:my-0 md:mt-12 gap-0.5 '>
                    {
                        contactInfo.map((item)=> {return(
                            <div className='flex flex-row gap-2 items-center' key={item.id} >
                                 <Image width={20} height={20} src={item.icon} alt={item.alt} />
                                 <p className='text-darkblue-light max-w-md text-base md:text-lg' style={{direction:'ltr'}}>
                                    {item.text}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
            <div className='z-10'>
                <form className='flex flex-col gap-6' ref={ref} onSubmit={sendEmail}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name' className='text-lightblue-light block text-base font-semibold'>الاسم :</label>
                        <input className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light  block w-full p-2.5'
                            name="name" type='text' id="name" placeholder='اسم المستخدم' required />



                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='text-lightblue-light block text-base font-semibold'>البريد الإلكتروني :</label>
                        <input className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light block w-full p-2.5'
                            name="email" type='email' id="email" placeholder='username@gmail.com' required />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='text-lightblue-light block text-base font-semibold'>الرسالة :</label>
                        <textarea className='bg-[#d2edd0] border rounded-lg border-lightblue-light text-darkblue-light placeholder:text-lightblue-light focus:outline-none focus:border-darkblue-light focus:bg-white-light  block w-full p-2.5'
                            name="message" id="message" placeholder='لنتحدث عن ...' required />

                    </div>
                    <button type='submit' className='flex flex-row justify-center px-3 py-1 text-base md:px-6 md:py-3 md:text-xl rounded-lg w-full  text-white-light bg-lightblue-light hover:bg-bluehover-light hover:border hover:border-lightblue-light hover:text-lightblue-light'>
                    {isLoading?<Image src="/images/loading.svg" alt="Loading" width={25} height={25}/>:<span>إرسال</span> }
                      
                    </button>
                    <span className={`w-full text-center text-base font-bold ${error?'text-red-600':'text-darkgreenhover-light'}`}>{msg}</span>
                </form>
            </div>
        </section>
    )
}

export default EmailSection