import React from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { experiences } from '../../resources/experiences'
import { useSelector } from 'react-redux';
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className=' flex flex-col gap-10 border-l-2 border-[#89f7f7] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {experience.map((experience, index) => (
            <div onClick={() => {
              setSelectedItemIndex(index);
            }}
              className='cursor-pointer'>
              <h1 className={` text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-l-4 border-tertiary -ml-[3px] py-2 bg-[#16a2a225] rounded-r-lg' : 'text-white'} `}>{experience.period}</h1>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-secondary text-xl">{experience[selectedItemIndex].title}</h1>
          <h1 className="text-tertiary text-xl">{experience[selectedItemIndex].company}</h1>
          <p className='text-white'>{experience[selectedItemIndex].description}</p>

        </div>
      </div>
    </div>

  )
}

export default Experiences
