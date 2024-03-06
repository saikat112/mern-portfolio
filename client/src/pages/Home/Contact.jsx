import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: " Saikat Manna",
        email: " saikatmanna112@gmail.com",
        mobile: " 8967181069",
        address: " INDIA, WEST BENGAL , EAST MEDINIPUR , CHAITANYAPUR ,721645"
    }
    return (
        <div>
            <SectionTitle title="Contact Me" />
            <div className="flex">
                <div className="flex flex-col gap-1">
                    <h1 className='text-white'>{'{'}</h1>
                    {Object.keys(user).map((key) => (
                        <h1 className='ml-5' >
                            <span className="text-tertiary">{key}: </span>
                            <span className="text-tertiary">{user[key]}</span>
                        </h1>
                    ))}
                    <h1 className="text-white">{'}'}</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
