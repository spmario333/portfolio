import { Navbar, Section1, Section2, Section3 } from "@/components";
import { Mail } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";



export default function MainPage() {








    return (

        <div className="relative text-[--color]  font-roboto">


            <Section1 />


            <hr className="border-gray-400 mx-44" />

            <Section2 />

            <hr className="border-gray-400 mx-44"
                id="experience"
            />

            <Section3 />

            <hr className="border-gray-400 mx-44" />

            <section className="px-20 mt-10">
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col md:pr-16 col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">Bachelor of Science (B.S.) in Computer Science Engineering</h5>
                        <br />
                        <h6 className="text-lg font-bold">University of Informatics Sciences (UCI), Havana, Cuba.</h6>
                        <br />
                    </div>
                    <div className="flex flex-col col-span-4 ">
                        <p className="text-xl">The Computer Science Engineering program trains well-rounded and highly qualified professionals whose role is linked to the development of the Informatization of Cuban society through three key areas: the development of the national software industry, the digital transformation of organizations, and the provision of the necessary support for the maintenance of information technology infrastructures.</p>
                    </div>
                </div>
            </section>
            <footer className="absolute w-full h-36 bottom-0 p-8 px-16 bg-transparent text-[--color]">
                <p className="text-xl" >Thank you for checking out my portfolio</p>
                <Link className="text-xl hover:text-blue-600 align-center flex justify-items-start transition-colors duration-300" href="mailto:spmario333@gmail.com"><Mail className='mr-1.5' /> spmario333@gmail.com</Link>

            </footer>
            <div className="h-80">
            </div>
        </div>



    );
}