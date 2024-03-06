import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "c++",
        "Javascript",
        "React",
        "Express",
        "MongoDB",
        "Node",
        "RubyOnRails",
        "Graph Api"
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full sm:h-[40vh]'>
                    <dotlottie-player src="https://lottie.host/f817709b-e74d-4f3a-a54a-8bfc777c8bb5/6EgxDdgXIf.json" background="transparent" speed="1"  loop autoplay ></dotlottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white">C++ was designed with systems programming and embedded,
                        resource-constrained software and large systems in mind, with performance, efficiency
                    </p>
                    <p className="text-white" >In 1982, Stroustrup started to develop a successor to C with Classes, which he named "C++"
                        (++ being the increment operator in C) after going through several other names. New features
                        were added, including virtual functions, function name and operator overloading, references,
                        constants, type-safe free-store memory allocation
                    </p>

                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>This is the technology which i work</h1>
                <div className='flex flex-wrap gap-10 mt-5 '>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary py-3 px-6'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
