import React from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { projects } from '../../resources/projects'
import { useSelector } from 'react-redux';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="projects" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className=' flex flex-col gap-10 border-l-2 border-[#89f7f7] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((projects, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'>
                            <h1 className={` text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-l-4 border-tertiary -ml-[3px] py-2 bg-[#16a2a225] rounded-r-lg' : 'text-white'} `}>{projects.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>

                    <img src={projects[selectedItemIndex].Image} alt="" className='h-60 w-72'/>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                        <p className="text-white">{projects[selectedItemIndex].description}</p>
                        <p className="text-white"></p>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sint quasi dicta itaque corporis doloribus! Nihil, beatae quidem accusantium soluta fugit sapiente tempore molestias laudantium? Fuga molestias exercitationem ratione rem!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
