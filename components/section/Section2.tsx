"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useInView } from '../../hooks/effect'
import { Mail, Phone } from 'iconoir-react'

export const Section2 = () => {

    const { ref, isVisible } = useInView<HTMLDivElement>()


    return (
        <section
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 px-8 mt-20 mb-20 tracking-wider transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
            ref={ref}



        >

            <div className="p-6  rounded-lg">
                {/* <Image
                            className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-10px"
                            src="/1764735416678.jpeg"
                            alt="Mario"
                            width={100}
                            height={100}
                        /> */}
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <br />
                <div className="flex flex-wrap gap-2">

                    <span className="text-xl px-3 py-1  rounded">React.js</span>
                    <span className="text-xl px-3 py-1  rounded">HTML/CSS</span>
                    <span className="text-xl px-3 py-1  rounded">JavaScript</span>
                    <span className="text-xl px-3 py-1  rounded">Git</span>
                    <span className="text-xl px-3 py-1  rounded">Teamwork</span>
                    <span className="text-xl px-3 py-1  rounded">Adaptability</span>
                    <span className="text-xl px-3 py-1  rounded">Empathy</span>
                    <span className="text-xl px-3 py-1  rounded">Motivation</span>
                    <span className="text-xl px-3 py-1  rounded">Punctuality and commitment</span>
                    <span className="text-xl px-3 py-1  rounded">Communication</span>
                    <span className="text-xl px-3 py-1  rounded">Curiosity for new technologies</span>


                </div>
                <br />

            </div>
            <div className="p-6  rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Summary</h3>
                <br />
                <p
                    className='text-xl'
                    id="contact"
                >I am a junior web developer in my first steps of my professional career, with an initial focus on frontend development using React.js. I'm very interested in continuing to gain experience building user interfaces and reusable components, working with hooks, state management, and component structure.</p>

            </div>
            <div className="p-6 bg-[--background] self-start rounded-lg md:col-span-2">
                <br />
                <h3
                    className="text-2xl font-semibold mb-4 "

                >Contact</h3>
                <Link className="flex text-xl hover:text-blue-400 hover:underline" href="mailto:spmario333@gmail.com"><Mail className='mr-1.5' /> spmario333@gmail.com</Link>
                <p className="flex text-xl mt-2"><Phone className='mr-1.5' />+53-55608001</p>

            </div>

            {/* <Image className="hidden md:block  object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-30px"
                    src="/1764735416678.jpeg" alt="Your Name Here" width={560}
                    height={560} /> */}

            {/* <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
                    <div className="px-20">
                        <h4 className="text-xl font-bold">Experience</h4>
                        <br />
                        <p className="text-6xl">+1</p>

                    </div>
                    <div className="px-20">
                        <h4 className="text-xl font-bold">Projects</h4>
                        <br />
                        <p className="text-6xl">+4</p>

                    </div>
                    <div className="px-20">
                        <h4 className="text-xl font-bold">Clients</h4>
                        <br />
                        <p className="text-6xl">+3</p>

                    </div>
                </div> */}
        </section>
    )
}
