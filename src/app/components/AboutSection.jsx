"use client";
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
const TAB_DATA=[
 {title:"مجالاتنا",
  id:"domains",
  content:(
<ul className='list-disc pr-2 marker:text-darkgreenhover-light'>
  <li>خدمات مجتمعية</li>
  <li>تنمية وإسكان</li>
  <li>صحة</li>
</ul>
  )
 } ,
 {title:"أهدافنا",
  id:"goals",
  content:(
<ul className='list-decimal pr-2 marker:text-darkgreenhover-light'>
  <li>تقديم حزمة من الخدمات المتكاملة للأسرة بما فيها الصحي والتنمية والإسكان وتوفير متطلبات الأسرة.
  </li>
  <li>المساهمة في تدريب وتمكين وتطوير المهارات وتقديم الإرشاد الإجتماعي المتكامل.
  </li>
  <li>المساهمة في تأهيل ودمج ذوي الإعاقة من خلال أنشطة وبرامج اجتماعية وتعزيز اندماجهم.
  </li>
  <li>المساهمة في دعم الخدمات البيئية والمساحات الخضراء والتي تسهم في إعادة الحياة وبناء سوريا الجديدة.
  </li>
</ul>
  )
 },
 {title:"الأعضاء",
  id:"members",
  content:(
<ul className=' text-darkgreenhover-light list-item pr-2'>
<li>  رئيس مجلس الأمناء :{" "}
  <span className='text-darkblue-light'>م.سهى سعد الدين </span>

</li>
  <li> نائب رئيس مجلس الأمناء :{" "}
  <span className='text-darkblue-light'>د.اسامة الأبرش </span>
   </li>
  <li>  أمين صندوق مجلس الأمناء :{" "}
  <span className='text-darkblue-light'>أ. غنى الدرويش </span>
   </li>
  <li> عضو مجلس الأمناء :{" "}
  <span className='text-darkblue-light'>د.سوسن خرسان </span>
    </li>
</ul>
  )
 }

]
const AboutSection = () => {
  const [tab, setTab] = useState("domains")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section id="About">
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-16 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image src="/images/Team.jpg" width={500} height={500} alt="Team" className='rounded-xl mt-4 md:mt-12' />

        <div className='mt-4 md:mt-8 text-right flex flex-col h-full justify-startu'>
          <h2 className='text-4xl font-bold mb-4 text-lightblue-light'>من نحن؟</h2>
          <p className='text-base md:text-lg text-darkblue-light'>
            نحن مؤسسة عائلتي، بدأنا كفريق تطوعي في شباط 2024 وحصلنا على إشهارنا كمؤسسة مجتمعية بتاريخ 2025/2/11 لنكون أوّل مؤسسة بعد التّحرير في حمص.
          </p>
          <div className='flex flex-row justify-start gap-4 mt-8 text-lg'>
            <TabButton selectTab={() => handleTabChange("domains")}
              active={tab === "domains"}
            >مجالاتنا</TabButton>
            <TabButton selectTab={() => handleTabChange("goals")}
              active={tab === "goals"}
            >أهدافنا</TabButton>
            <TabButton selectTab={() => handleTabChange("members")}
              active={tab === "members"}
            >الأعضاء</TabButton>
          </div>
          <div className=' mt-2 md:mt-4 text-darkblue-light text-base md:text-lg'>
            {
              TAB_DATA.find((t)=>t.id == tab).content
            }
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default AboutSection