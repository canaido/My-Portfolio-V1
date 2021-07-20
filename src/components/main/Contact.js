import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="relative py-20 text-portfolio-5000 body-font relative md:h-screen h-auto bg-gradient-to-b from-portfolio-4000  to-portfolio-1000 font-serif">
                <div className="container px-5 md:py-24 py-2 mx-auto text-black">
                    <div className="flex flex-col  w-full mb-12 px-6">
                        <h1 className="sm:text-3xl text-2xl font-medium mb-4  text-center md:ml-20 text-center ">Contact Me</h1>
                        <p className=" mx-auto leading-relaxed text-base text-center">Feel free to contact me for a quote, advice on possible web decisions or anything tech related I am always happy to discuss potential projects or the latest tech trends.</p>
                    </div>
                    <div className="w-full border-t border-portfolio-1000 flex-auto px-6">
                        <div className="px-12 py-6 flex flex-wrap  align-baseline mx-auto md:justify-between justify-center text-center">
                            <div className="md:px-6 px-12 py-6 text-xl">
                                <h2 className="font-bold">Email:</h2>
                                <a class="text-portfolio-5000 hover:text-portfolio-1000
                                hover:underline"
                                    href="mailto:info@acdynamics.ie">
                                    info@acdynamics.ie
                                </a>
                            </div>
                            <div className="md:px-6 px-12 md:py-6 py-3 text-xl">
                                <h2 className="font-bold">Address:</h2>
                                <p className="leading-normal my-5">Rockview,</p>
                                <p className="leading-normal my-5">Simon's Ridge,</p>
                                <p className="leading-normal my-5">Dublin 18,</p>
                                <p className="leading-normal my-5">Ireland</p></div>
                            <div className="md:px-6 px-12 py-6 text-xl">
                                <h2 className="font-bold">Telephone:</h2>
                                <p className="leading-normal my-5 ">0876608858</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact;
