import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex'>
                <div className='h-[70vh]'>
                    <dotlottie-player src="https://lottie.host/f817709b-e74d-4f3a-a54a-8bfc777c8bb5/6EgxDdgXIf.json" background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-white">C++ was designed with systems programming and embedded,
                        resource-constrained software and large systems in mind, with performance, efficiency,
                        and flexibility of use as its design highlights.[15] C++ has also been found useful
                        in many other contexts, with key strengths being software infrastructure and
                        resource-constrained applications,[15] including desktop applications, video games, servers</p>
                </div>
            </div>
        </div>
    )
}

export default About
