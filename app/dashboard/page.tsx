import { Navbar, Section2 } from "@/components";
import Image from "next/image";
import Link from "next/link";



export default function MainPage() {

        
    
        
            // const observer = new IntersectionObserver((entries) => {
            //     entries.forEach(entry => {
            //         if (entry.isIntersecting) {
            //             document.getElementById("aparecer")?.classList.remove('opacity-0', 'translate-y-4');
            //             document.getElementById("aparecer")?.classList.add('opacity-100', 'translate-y-0');
            //         } else {
            //             document.getElementById("aparecer")?.classList.add('opacity-0', 'translate-y-4');
            //             document.getElementById("aparecer")?.classList.remove('opacity-100', 'translate-y-0');
            //         }
            //     });
            // }, { threshold: 0.1 });
            // observer.observe(document.getElementById("aparecer"));
        
        



    return (

        <div className="relative text-gray-800 bg-radial from-gray-100 to-gray-600 font-roboto">
            <header>
                <Navbar />
            </header>


            <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 mt-20 mb-20 tracking-wider min-h-screen">
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl">Mario Rosendiz</h1>
                    <h2 className="font-light text-4xl sm:text-5xl lg:text-6xl mt-4">System Engineer</h2>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative">
                        <Image
                            className="hidden md:block object-cover max-h-[600px] lg:max-h-[700px]  "
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

            <hr className="border-gray-400 mx-44" />
            <Section2/>

            {/* <section
                className="flex items-center justify-between px-8 mt-20 mb-20 tracking-wider
                opacity-100 translate-y-0"
                onScroll={(e)=>{
                    console.log(e)
                }}
                id="aparecer"

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
                        <p className="w-full md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque delectus
                            consequuntur harum doloremque assumenda omnis quibusdam quia neque, adipisci iste laborum sed
                            nostrum.</p>

                    </div>
                    <div className="px-10 md:px-20">
                        <br />
                        <h3
                            className="text-xl font-bold"
                            id="contact"
                        >Contact</h3>
                        <Link className="text-xl hover:text-blue-600" href="mailto:test@nomail.com">test@email.com</Link>
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
                        <p className="text-6xl">+2</p>

                    </div>
                    <div className="px-20">
                        <h4 className="text-xl font-bold">Projects</h4>
                        <br />
                        <p className="text-6xl">+25</p>

                    </div>
                    <div className="px-20">
                        <h4 className="text-xl font-bold">Clients</h4>
                        <br />
                        <p className="text-6xl">+14</p>

                    </div>
                </div>
            </section> */}
            <hr className="border-gray-400 mx-44" />
            <section className="px-20 mt-10">
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left" id="experience">Experience</h4>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl font-bold">Full Stack Developer</h5>
                        <h6 className="text-lg font-bold">Facebook</h6>
                        <p>Jan 2015 - present</p>
                    </div>
                    <div className="flex flex-col col-span-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">Software Developer</h5>
                        <h6 className="text-lg font-bold">Google</h6>
                        <p>Feb 2010 - Jan 2015</p>
                    </div>
                    <div className="flex flex-col col-span-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
                        <h6 className="text-lg font-bold">IBM</h6>
                        <p>Apr 2008 - Feb 2010</p>
                    </div>
                    <div className="flex flex-col col-span-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                    </div>
                </div>
            </section>
            <hr className="border-gray-400 mx-44" />
            <section className="px-20 mt-10">
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">B.S. Computer Science</h5>
                        <h6 className="text-lg font-bold">Harward University</h6>
                        <p>Jan 2015 - present</p>
                    </div>
                    <div className="flex flex-col col-span-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                            adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                            laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                            voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                            harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                    </div>
                </div>
            </section>
            <footer className="absolute w-full h-36 bottom-0 p-8 px-16 bg-gray-800 text-gray-50">
                <p className="text-2xl">Thank you for checking out my portfolio</p>
                <Link className="text-lg" href="mailto:mail@you.com">mail@you.com</Link>
            </footer>
            <div className="h-80">
            </div>
        </div>



    );
}