"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useInView } from '../hooks/effect'

export const Section2 = () => {

    const {ref, isVisible} = useInView<HTMLDivElement>()


  return (
                <section
                className={`flex items-center justify-between px-8 mt-20 mb-20 tracking-wider transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
                ref={ref}
                
                

            >
                <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
                    <div className="max-md:items-center flex  flex-col px-10 md:px-20">
                        <Image
                            className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-10px"
                            src="/1764735416678.jpeg"
                            alt="Mario"
                            width={100}
                            height={100}
                        />
                        <h3 className="text-xl font-bold">Skills</h3>
                        <br />
                        <span className="text-lg">Management</span>
                        <span className="text-lg">Collaboration</span>
                        <span className="text-lg">Communication</span>
                        <span className="text-lg">Microsoft Office</span>

                    </div>
                    <div className="px-10 md:px-20">
                        <h3 className="text-xl font-bold">Summary</h3>
                        <br />
                        <p className="w-full md:w-2/3"
                        id="contact"
                        >I am junior web developer In my first steps of my professional career, with an initial focus on frontend development using React.js. I'm very interested in continuing to gain experience building user interfaces and reusable components, working with hooks, state management and component structure.</p>

                    </div>
                    <div className="px-10 md:px-20">
                        <br />
                        <h3
                            className="text-xl font-bold"
                            
                        >Contact</h3>
                        <Link className="text-xl hover:text-blue-600" href="mailto:spmario333@gmail.com">spmario333@gmail.com</Link>
                        <p>+53-55608001</p>

                    </div>
                </div>

                <Image className="hidden md:block  object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-30px"
                    src="/1764735416678.jpeg" alt="Your Name Here" width={560}
                    height={560} />

                <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
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
                </div>
            </section>
  )
}
