import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "bg-[#d2edd0] text-darkblue-light border-darkgreenhover-light" :
        "border-darkgreen-light hover:bg-[#d2edd0] hover:text-darkblue-light hover:border-darkgreenhover-light"
    return (
        <button
            className={`${buttonStyles} px-3 py-1 text-base rounded-full border-2  md:px-6 md:py-3 md:text-xl cursor-pointer`}
            onClick={()=>onClick(name)}
        >
            {name}</button>

    )
}

export default ProjectTag