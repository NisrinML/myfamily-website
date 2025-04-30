import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClasses=active?'text-darkgreenhover-light border-b-2  border-darkgreenhover-light':' text-lightblue-light hover:text-darkgreenhover-light hover:cursor-pointer'
  return (
    <button onClick={selectTab}>
        <p  className={`ml-3 font-semibold ${buttonClasses}`}> {children}</p>
     
    </button>
        
  )
}

export default TabButton