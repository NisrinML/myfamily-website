import React from 'react'

const achievmentList=[
  {
    metric:"مستفيد من جلسات التوعية",
    numbers:"+1K"
  },
  {
    metric:"مستفيد من الحملات الطبية",
    numbers:"+600"
  },
  {
    metric:"مستفيد من السلل الغذائية",
    numbers:"+300"
  },{
    metric:"مستفيد من الدورات التدريبية ",
    numbers:"+500"
  }
]
const AchievmentSection = () => {
  return (
    <div className='py-4 px-4 xl:gap-16 md:py-16'>
      <div className='border-lightblue-light border rounded-md py-8 lg:py-16 px-4 flex flex-row items-stretch  justify-between '>
      {
        achievmentList.map((achievment,index)=>{ return(
          <div key={index}
          className='flex flex-col items-center justify-start mx-2 md:mx-4 flex-1'
          >
            <h2 className='text-darkgreenhover-light text-xl md:text-3xl lg:text-4xl font-bold'>
              {achievment.numbers}
            </h2>
            <p className='text-darkblue-light text-sm md:text-base lg:text-xl text-center '>
              {achievment.metric}
            </p>
          </div>
       ) })
      }
      </div>
    </div>
  )
}

export default AchievmentSection