import React from 'react'

function Intro() {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
            <h1 className='text-white'> Hi, I am</h1>
            <h1 className='text-7xl text-secondary font-semibold' > Saikat Manna</h1>
            <h1 className='text-5xl text-white font-semibold' > fullstack devoloper</h1>
            <p className='text-2xl text-white ' > i am make this using html css tailwindcss</p>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get started</button>
        </div>
    )
}

export default Intro
