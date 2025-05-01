import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "مبادرة دعم وتمكين المرأة",
        description: "في قلب الأزمات تُشرق قوة المرأة، وفي مناطق النزاعات حيث تكون التحديات أكبر، تصبح توعية المرأة منارة أمل؛ جلسات سيدات هدفها توعية ودعم وتمكين النساء.",
        image: "/images/1.jpg",
        tag: ["All", "Support"],
        instaUrl:'https://www.instagram.com/p/DI3rPvaor-H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        faceUrl:'https://www.facebook.com/share/p/16HRDfjB87/',
    },
    {
        id: 2,
        title: "مبادرة توعية صحيّة للأطفال",
        description: "لأنّ الأطفال هم أمل المستقبل،؛ جلسات ترفيهية وتعليمية للأطفال لبناء لبنة أساية سليمة لمجتمع أفضل.",
        image: "/images/2.jpg",
        tag: ["All", "Kids", "Health"],
        instaUrl:'https://www.instagram.com/p/DHWyMtmI7k1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        faceUrl:'https://www.facebook.com/permalink.php?story_fbid=pfbid0qBuviVMX8TgtG5K2YVL18s9zv3guWTyDuidrhiUzpaQdnDaMfbyThSVtUChuZdWbl&id=61572701261585',
    },
    {
        id: 3,
        title: "مبادرة عيادات طبية مجّانيّة",
        description: "الهدف من المبادرة تدخّل في المجتمع المحلي بعد التحرير كاستجابة طارئة عن طريق تقديم خدمات طبيّة علاجيّة واستشاريّة مجانيّة بالكامل.",
        image: "/images/3.jpg",
        tag: ["All", "Health"],
        instaUrl:'https://www.instagram.com/p/DFLZT1Qotci/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        faceUrl:'/',
    },
    // {
    //     id: 4,
    //     title: "المشاركة في احصاء سكان مناطق محدّدة",
    //     description: "الهدف من هذه المبادرات المساهمة في الأعمال المجتمعية لتوفير وتنظيم البيانات وتسهيل عمليات البحث والإحصاء وسهولة الوصول عند الحاجة.",
    //     image: "",
    //     tag: ["All", "Society"],
    //     instaUrl:'/',
    //     faceUrl:'/',
    // },
    {
        id: 5,
        title: "مبادرة توزيع سلل غذائية",
        description: "الهدف من المبادرة  الاستجابة لهذه الاحتياجات الملحّة للأسر الأكثر هشاشة وليس لهم معيل من خلال تقديم سلل غذائية تساعدهم في تلبية متطلبات حياتهم اليومية.",
        image: "/images/4.jpg",
        tag: ["All", "Supplies"],
        instaUrl:'https://www.instagram.com/p/DHcATljowEN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        faceUrl:'https://www.facebook.com/share/p/16PJ64H72d/',
    },
    {
        id: 6,
        title: "مبادرة توزيع أدوية طبية",
        description: "توزيع وصفات طبية للأدوية المزمنة والدائمة بالتعاون مع وزارة الصحة.",
        image: "/images/5.jpg",
        tag: ["All", "Health", "Supplies"],
        instaUrl:'https://www.instagram.com/p/DHGbthlII1B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        faceUrl:'https://www.facebook.com/share/p/1FdZDViPyf/',
    },
    {
        id: 7,
        title: "جلسات توعية وتثقيف للرّجال",
        description: "جلسات هدفها توعية وتثقيف الرجال الذين يشكلون رأس الأسرة، بهدف بناء صحة أسرية وضمان تربية سليمة للأطفال.",
        image: "/images/6.jpg",
        tag: ["All", "Support"],
        instaUrl:'/',
        faceUrl:'/',
    },
]
const ProjectSection = () => {
    return (
        <>
     <h2 className='text-4xl font-bold mb-4 text-lightblue-light mt-4 text-center'>مبادراتنا</h2>
      <div>
        
      </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {
                projectsData.map((project)=>
                    <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} faceUrl={project.faceUrl} instaUrl={project.instaUrl}/>
                )
            }
            </div>
        </>
    )
}

export default ProjectSection