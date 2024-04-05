import React from 'react'

const SectionHeaders = ({subHeader, mainHeader}) => {
  return (
    <div>
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          {subHeader}
        </h3>
        <h2 className="text-primary text-4xl font-bold italic">
            {mainHeader}
        </h2>
    </div>
  )
}

export default SectionHeaders