import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../components/Slideshow';
// import '../assets/styles/homepage.css'
import Resume from '/Jayden-Metcalfe-Resume.pdf'
import headshotImg from "/images/headshot-resume.png"
import InfoBox from '../components/InfoBox';
import StackBox from '../components/StackBox';
import { FaSkiing } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

  const HomePage = () => {

  return (
    <div className="mb-3 max-md:mb-0">

        {/* <============ INTRO BOX ============>*/}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 md:mt-30 mb-16 md:mb-30">
            <div>
                <img src={headshotImg} className="w-full max-w-xs md:max-w-md h-auto" alt="photo of myself"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <h1 className="text-primaryBlue font-['Shrikhand'] text-[4rem]/18 text-left tracking-wide">Jayden</h1>
                    <h1 className="text-primaryBlue font-['Shrikhand'] text-[4rem]/18 text-left">Metcalfe</h1>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Full-Stack Software Developer</h2>
                </div>
                <div className="flex gap-1 items-center">
                    <IoMdPin className="text-xl"/> 
                    <p>Whistler, BC</p>
                </div>
                <div className="flex pt-2">
                    <a 
                        className="bg-primaryRed hover:bg-primaryBlue active:bg-primaryBlue rounded-sm border-0 p-2 text-base font-bold leading-normal flex flex-row items-center gap-2 cursor-pointer shadow-[0_5px_#999] active:shadow-[0_3px_#666] active:translate-y-0.5 text-[#FFFFFF] no-underline"
                        href={Resume}
                        download="Jayden-Metcalfe-Resume"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z" fill="#FFFFFF"/>
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>


        {/* <============ ABOUT ME BOX ============>*/}
        <div className="px-4 py-10 md:p-20">
            <div>
                <h2 className="font-['Shrikhand'] text-3xl font-bold leading-normal text-primaryBlue">About Me</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-base md:text-xl font-semibold">
                <p>
                    Full-stack developer with a knack for problem-solving who enjoys building end-to-end applications that turn complex data and workflows into intuitive, usable products.
                </p>
                <p>
                    Prefers working across the stack, from designing clean UI components to optimizing backend performance and deployment processes.
                </p>
                <p>
                    Experienced with applications that integrate real-time data, support multiple user roles, and require thoughtful coordination between frontend and backend systems.
                </p>
                <p>
                    Takes a self-driven approach to learning modern tools and frameworks. Develops skills through hands-on projects, independent study, and collaborating with agentic AI tools.
                </p>
            </div>
        </div>


        {/* <============ SKILLS BOX ============>*/}
        {/* <div className="flex flex-col gap-2 relative z-0 rounded-lg bg-lightBlueBox p-5 shadow-[0_8px_24px_rgba(0,0,0,0.10),0_4px_12px_rgba(0,0,0,0.08)]"> */}
        <div className="flex p-10">
            <div className="flex flex-col w-full gap-2 items-center p-10 rounded-lg bg-lightBlueBox/90">
                {/* <div>
                    <h2 className="font-['Shrikhand'] text-3xl text-primaryBlue">Stack</h2>
                </div> */}
                <div className="flex flex-col gap-6 md:gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Languages: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"Python"}/>
                            <StackBox tool={"TypeScript"}/>
                            <StackBox tool={"JavaScript"}/>
                            <StackBox tool={"Java"}/>
                            <StackBox tool={"C"}/>
                            <StackBox tool={"Bash"}/>
                            <StackBox tool={"Clojure"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Frontend: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"React"}/>
                            <StackBox tool={"Angular"}/>
                            <StackBox tool={"HTML"}/>
                            <StackBox tool={"CSS"}/>
                            <StackBox tool={"Sass"}/>
                            <StackBox tool={"TailwindCSS"}/>
                            <StackBox tool={"Bootstrap"}/>
                            <StackBox tool={"Next.js"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Backend: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"Node.js"}/>
                            <StackBox tool={"Express.js"}/>
                            <StackBox tool={"FastAPI"}/>
                            <StackBox tool={"OAuth 2.0"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Testing: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"Jest"}/>
                            <StackBox tool={"Vitest"}/>
                            <StackBox tool={"React Testing Library"}/>
                            <StackBox tool={"Postman"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Databases: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"PostgreSQL"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Cloud & DevOps: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"AWS"}/>
                            <StackBox tool={"Vercel"}/>
                            <StackBox tool={"Docker"}/>
                            <StackBox tool={"REST APIs"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Machine Learning & Data: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"scikit-learn"}/>
                            <StackBox tool={"Keras/TensorFlow"}/>
                            <StackBox tool={"Pandas"}/>
                            <StackBox tool={"NumPy"}/>
                            <StackBox tool={"Matplotlib"}/>
                            <StackBox tool={"NLTK"}/>
                            <StackBox tool={"lingpy"}/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="font-semibold">Tools: </h2>
                        <div className="font-light flex gap-2 flex-wrap">
                            <StackBox tool={"Git"}/>
                            <StackBox tool={"GitHub"}/>
                            <StackBox tool={"Arduino"}/>
                            <StackBox tool={"Figma"}/>
                            <StackBox tool={"Claude"}/>
                        </div>
                    </div>
                </div>           
            </div>
        </div>



        {/* <============ EXTRA BOX ============>*/}
        <div className="flex p-10">
            {/* <div className="flex p-10 gap-8 justify-between items-start w-full rounded-lg bg-lightBlueBox"> */}
            <div className="flex flex-col lg:flex-row p-6 md:p-10 gap-8 w-full rounded-lg bg-lightBlueBox">
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="font-['Shrikhand'] text-3xl font-bold leading-normal text-primaryBlue">Fun Facts</h2>
                    </div>
                    <div>
                        <ul className="list-disc list-image-none text-xl">
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3"><b>Secret Talent: </b>really good at remembering birthdays</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3"><b>Hobbies: </b>squash, baking cookies, Greek and Roman mythology, puzzles, photography</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3"><b>Life Goal: </b>become a pool shark</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3"><b>Skiing Goal: </b>learn how to do a backflip</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3"><b>Childhood Dream Job: </b>archaeologist</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaSkiing className="text-primaryBlue text-xl shrink-0" />
                                <span className="mt-3 mb-3">I have kept a detailed journal of my day for 2700+ days!</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Slideshow />
            </div>
        </div>
    </div>
  )
}

export default HomePage