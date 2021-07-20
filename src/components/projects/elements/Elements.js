import React from 'react'
import TablePeriodic from './TablePeriodic'

const Elements = () => {
    return (
        <div className="bg-black px-1 pt-10 pb-40">
            <h1
                className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white underline transition duration-750 ease-in-out"
            >
                Periodic Table of Elements
            </h1>
            <p className="text-center text-white p-1 text-xs">(Please use app in landscape if you are using mobile phone)</p>
            <TablePeriodic />
        </div>
    )
}

export default Elements
