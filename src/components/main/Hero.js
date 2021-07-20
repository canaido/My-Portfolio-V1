import React from 'react'
import mainImage from '../content/myImage.jpg';

/*<p className="text-black text-xs">
                        Photography by </p><a 
                        href="https://www.instagram.com/kevinhennessyphotography/?hl=en" 
                        target="_blank" 
                        rel="noreferrer"
                        className="cursor text-portfolio-1000 hover:text-black hover:underline text-xs px-1"
                        >Kevin Hennesy</a>*/

const Hero = () => {
    return (
        <div id="about" className="font-serif relative text-black body-font md:h-screen py-2  bg-gradient-to-b from-portfolio-1000  to-portfolio-4000" >
            <section id="hero" className="container mx-auto flex px-5 py-48 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 flex justify-center md:mb-0">
                    <img className="h-full w-auto rounded-full " alt="hero" src={mainImage} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center h-auto">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Thank you for visiting my site and I hope you enjoy my work
                    </h1>
                    <p className="mb-8 leading-relaxed text-black text-lg">Hi, I am Aidan, a Dublin based Front-end Developer currently working for a South Dublin based software company helping create UI's for project integration and web site maintenance. I am naturally curious to how anything web related works and perpetually working on improving my skills and learning the latest technologies.</p>
                    <p className="mb-8 leading-relaxed text-black text-lg">I am open to small projects or consultation for future projects that are being considered. Feel free to contact me if you want to talk about anything tech / web related or feel free to follow me on social media. <span className="text-sm">(links below)</span></p>
                </div>
            </section>
        </div>
    )
}

export default Hero
