"use client"


import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useInView } from '../hooks/effect'
import Typed from 'typed.js'

export const Section1 = () => {

    const { ref, isVisible } = useInView<HTMLDivElement>()

    const line1 = useRef<HTMLSpanElement | null>(null)
    const line2 = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {

        const typed = new Typed(line1.current!, {
            strings: [
                "Hi, I'm Mario",

            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1200,
            showCursor: false,
            loop: false,
            onComplete: () => {
                new Typed(line2.current!, {
                    strings: [
                        "Welcome to my portfolio website",
                    ],
                    typeSpeed: 60,
                    backSpeed: 40,
                    backDelay: 1200,
                    loop: false,
                })
            }

        })
        return () => typed.destroy();

    }, [])













    return (
        <section
            className='flex flex-col md:flex-row items-center md:items-start justify-between px-8 mt-20  tracking-wider min-h-screen'

        >
            <div
                className={`md:w-1/2 text-center md:text-left mb-12 md:mb-0 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                ref={ref}
            >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl">
                    <span ref={line1}></span>
                    <br />
                    <span ref={line2}></span>
                </h1>
            </div>

            <div
                className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                ref={ref}
            >
                <div className="relative ">
                    <Image
                        className="hidden md:block object-cover max-h-[600px] lg:max-h-[700px] opacity-90 "
                        src="/front-1.png"
                        alt="Mario"
                        width={560}
                        height={560}

                    />
                    <Image
                        className="md:hidden object-cover max-h-[400px] ring-2 ring-gray-500/50 ring-offset-4 rounded-lg"
                        src="/front-1.png"
                        alt="Mario"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </section>
    )
}
