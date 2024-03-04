import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences'
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className='flex py-10'>
        <div className=' flex flex-col gap-5 border-l-2 border-[#89f7f7]'>
          {experiences.map((experiences, index) => (
            <div onClick={() => {
              setSelectedItemIndex(index);
            }}
              className='cursor-pointer'>
              <h1 className={` text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-l-4 border-tertiary' : 'text-white'} `}>{experiences.period}</h1>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>

  )
}

export default Experiences
