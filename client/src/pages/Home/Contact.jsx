import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title="Contact Me" />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact).map((key) => (
                        <p className='ml-5' >
                            <span className="text-tertiary">{key}: </span>
                            <span className="text-tertiary">{contact[key]}</span>
                        </p>
                    ))}
                    <p className="text-tertiary">{'}'}</p>
                </div>
                <div className='h-[400px]'>
                    <dotlottie-player src="https://lottie.host/6d2eb11a-19e0-40a8-b71f-8c77decd65fd/58lQHgrpwS.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
