"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useInView } from '../../hooks/effect'



export const Section3 = () => {

    const { ref, isVisible } = useInView<HTMLDivElement>()

    return (

        <section
            className={`px-20 mt-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
            ref={ref}
        >
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left" >Experience</h4>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl font-bold">About me...</h5>
                    <h6 className="text-lg font-bold">Introduction</h6>
                </div>
                <div className="flex flex-col col-span-4">
                    <p className="text-xl">Junior Web Developer focused on the JavaScript ecosystem, with strong interest in Full Stack development. Although I do not have formal work experience, I have gained practical experience through personal and academic projects focused on the real-world application of acquired knowledge.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl  font-bold">Real Web Aplication</h5>
                    <h6 className="text-lg font-bold">Contact</h6>
                </div>
                <div className="flex flex-col col-span-4">
                    <p className="text-xl">I developed a simple MERN contact management application in which I implemented a basic backend using Express and CORS, a MySQL database connection, and a React-based frontend. In this project, I worked with global state management using Redux and Redux Thunk, as well as auxiliary libraries such as SweetAlert2 to improve UX/UI.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl  font-bold">Professional Development</h5>
                    <h6 className="text-lg font-bold">React.js to Next.js</h6>
                </div>
                <div className="flex flex-col col-span-4">
                    <p className="text-xl">My main React training comes from specialized courses, where I worked with tools such as React Router DOM, Redux, and middlewares for asynchronous state management. Additionally, I completed SQL courses, along with secondary training in HTML, CSS, and JavaScript.
                        I am currently in the learning process of Next.js, TypeScript, and Tailwind CSS. As part of this stage, I developed a web portfolio using Next.js and Tailwind, which is deployed on Vercel</p>
                </div>
            </div>
        </section>
    )
}




