import React from 'react'

const achievmentList=[
  {
    metric:"",
    numbers:""
  },
  {
    metric:"",
    numbers:""
  },
  {
    metric:"",
    numbers:""
  },{
    metric:"",
    numbers:""
  }
]
const AchievmentSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
      <div className='border-lightblue-light border rounded-md py-8 px-16 flex flex-row items-center justify-between '>
      {
        achievmentList.map((achievment,index)=>{
          return(
          <div key={index}
          className='flex flex-col items-center justify-center mx-4'
          >
            <h2 className='text-lightblue-light text-4xl font-bold'>
              {achievment.numbers}
            </h2>
            <p className='text-darkblue-light text-base '>
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