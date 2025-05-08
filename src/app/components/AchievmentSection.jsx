"use client";
import dynamic from 'next/dynamic';
import React from 'react'

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })
const achievmentList = [
  {
    prefix: "+",
    metric: "مستفيد من جلسات التوعية",
    numbers: "1",
    postfix: "K"
  },
  {
    prefix: "+",
    metric: "مستفيد من الحملات الطبية",
    numbers: "600",
    postfix: ""
  },
  {
    prefix: "+",
    metric: "مستفيد من السلل الغذائية",
    numbers: "300",
    postfix: ""
  }, {
    prefix: "+",
    metric: "مستفيد من الدورات التدريبية ",
    numbers: "500",
    postfix: ""
  }
]
const AchievmentSection = () => {
  return (
    <div className='py-4 px-4 xl:gap-16 md:py-16'>
      <div className='border-lightblue-light border rounded-md py-8 lg:py-16 px-4 flex flex-row items-stretch  justify-between '>
        {
          achievmentList.map((achievment, index) => {
            return (
              <div key={index}
                className='flex flex-col items-center justify-start mx-2 md:mx-4 flex-1 '
              >
                <h2 style={{ direction: 'ltr' }} className='flex flex-row text-darkgreenhover-light text-xl md:text-3xl lg:text-4xl font-bold'>
                  {achievment.prefix} {" "}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={Number(achievment.numbers)}
                    locale='en-US'
                    confis={(_, index) => {
                      return {
                        mass: 5,
                        friction: 200,
                        tensions: 10 * (index + 1)
                      };
                    }}
                  /> {" "}
                  {achievment.postfix}
                </h2>
                <p className='text-darkblue-light text-sm md:text-base lg:text-xl text-center '>
                  {achievment.metric}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AchievmentSection