import React from 'react'
import { motion } from 'framer-motion'
const variants={
  default: {
    width:0
  },
  active:{
    width:"calc(100% - 0.75rem)"
  }
}
const TabButton = ({active,selectTab,children}) => {
    const buttonClasses=active?'text-darkgreenhover-light':' text-lightblue-light hover:text-darkgreenhover-light hover:cursor-pointer'
  return (
    <button onClick={selectTab}>
        <p  className={`ml-3 font-semibold ${buttonClasses}`}> {children}</p>
        <motion.div
          animate={active?"active":"default"}
          variants={variants}
          className='h-0.5 bg-darkgreenhover-light mt-1 mr-1'
        >

        </motion.div>
    </button>
        
  )
}

export default TabButton