import React from 'react'
// import '../assets/styles/experience.css'

import mcgillLogo from "/images/mcgill_logo.jpg"
import nsaLogo from "/images/nsa_logo.jpg"
import cciLogo from "/images/cci_logo.jpg"
import wmscLogo from "/images/wmsc_logo.png"
import booksLogo from "/images/books.jpg"
import interacLogo from "/images/interac_logo.png"
import nbLogo from "/images/natural_blends_logo_square.png"
import ojibwayLogo from "/images/ojibway_logo.jpg"
import alpineOntarioLogo from "/images/aoa_logo.png"
import mcGillAthleticsLogo from "/images/mcgill_athletics_logo.png"
import Tabs from '../components/Tabs'
import InfoBox from '../components/InfoBox'
import Course from '../components/Course'
import { IoCalendarClearOutline } from "react-icons/io5";

const ExperiencePage = () => {

    const tabs = [
        {id: "tab1", label: "Work", content: 
            (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <InfoBox 
                    title={"Full-Stack Software Developer & U16 Alpine Ski Racing Coach"} 
                    media={
                            <img className="h-30 w-30" src={wmscLogo} alt="WMSC logo"/>
                        } 
                    tagline = {
                        <div className="flex flex-col">
                            <h3>Whistler Mountain Ski Club, <i>Whistler, BC</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />November 2024 - present</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6">  
                            <li className="mb-2">Engineered a full-stack analytics web application using React, TypeScript, Node.js, Express.js, PostgreSQL, and Python to track and analyze athletes' training data, implementing secure OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents</li>
                            <li className="mb-2">Architected and optimized RESTful APIs and SQL queries to support filtering and comparative analytics of hundreds of data points, enabling data-driven adjustments to team training programs</li>
                            <li className="mb-2">Containerized using Docker and Docker Compose to separate frontend, backend, and database services, then deployed on AWS EC2; collaborated with users to rapidly deliver feature updates in an iterative development process, often achieving same-day turnaround</li>
                            <li className="mb-2">Wrote unit and integration test suites using Jest, Vitest, and React Testing Library, improving application reliability</li>
                            <li className="mb-2">Developed a Python program to extract, filter, and visualize timing data, generating dynamic charts and reports to analyze athlete trends, progression, and performance comparisons across demographic metrics including age and gender</li>
                            <li className="mb-2">Designed custom Excel functions and automated formulas to calculate athletes' fitness testing combine scores based on Alpine Canada's official scoring rubric, eliminating manual calculations</li>
                            <li className="mb-2">Built a custom Uniform Manager platform with Next.js, TypeScript, PostgreSQL (Neon), and Prisma to streamline the distribution and tracking of hundreds of equipment pieces across 45+ employees, leveraging Claude AI as a development assistant to accelerate full-stack feature delivery</li>
                            <li className="mb-2">Analyzed data to design and lead targeted training sessions for 40+ athletes while coordinating with a team of 6 coaches to optimize program structure and outcomes</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Reinforcement Learning Researcher"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={mcgillLogo} alt="McGill logo"/>
                        }
                    tagline = {
                        <div className="flex flex-col">
                            <h3>The Britt Lab, <i>Montréal, QC</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />August 2023 - May 2024</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6"> 
                            <li className="mb-2">Worked with a PhD candidate in Dr. Jonathan Britt's lab on a project involving reinforcement learning in mice</li>
                            <li className="mb-2">Automated data processing and reporting using Python and Excel, generating visualizations from thousands of data points to support behavioural research analysis</li>
                            <li className="mb-2">Implemented Q-learning models to simulate and analyze decision-making behaviour</li>
                            <li className="mb-2">Debugged and extended Arduino code to scale for multiple experimental stages, each with variables that required fine tuning to maximize the collection of usable data points</li>
                            <li className="mb-2">Wrote research paper and designed poster that was presented at McGill's Cognitive Science Research Day</li>
                        </ul>
                    }
                />
                <InfoBox
                    title={"Product Research, Design and Development Intern"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={interacLogo} alt="Interac logo"/>
                        } 
                    tagline = {
                        <div className="flex flex-col">
                            <h3>Interac Corp., <i>Toronto, ON</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />May - August 2023</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6"> 
                            <li className="mb-2">Prototyped RESTful API endpoints and a PostgreSQL database schema for an escrow-based e-transfer solution to enhance transaction security and reduce fraud risk, which was demonstrated to senior leadershipy</li>
                            <li className="mb-2">Collaborated with cross-functional teams to build and update frontend features of an emulator using TypeScript and Angular within an MVC architecture, implementing UI/UX designs from Figma for client-specific product demos</li>
                            <li className="mb-2">Refactored legacy code to improve maintainability, scalability, and integration with new product features</li>
                        </ul>
                    }
                />
                <InfoBox
                    title={"Tutor"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={booksLogo} alt="Cartoon stack of books"/>
                        } 
                    tagline = {
                        <div className="flex flex-col">
                            <h3>Self-Employed, <i>Collingwood, ON</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />September 2019 - December 2022</h2> 
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6"> 
                            <li className="mb-2">Tutored 20+ elementary and high school aged students in a variety of subjects (i.e. math, English, science, social studies) over the years</li>
                            <li className="mb-2">Worked through practice problems, reviewed content for tests, strengthened confidence</li>
                            <li className="mb-2">Improved test grades by avg. 15%</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Landscape Maintenance Worker"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={nbLogo} alt="Natural Blends logo"/>
                        }
                    tagline = {
                        <div className="flex flex-col">
                            <h3>Natural Blends, <i>Collingwood, ON</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />April 2020 - September 2022</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6"> 
                            <li className="mb-2">Worked 50+ hour weeks to complete routine yard maintenance at 40+ properties in the Southern Georgian Bay area</li>
                            <li className="mb-2">Performed spring clean up of property to prepare for warmer months</li>
                            <li className="mb-2">Maintained garden appearance by spreading soil and mulch, cutting edges around beds and planting over 2000+ trees and plants each spring</li>
                            <li className="mb-2">Assisted with the design and preparation of seasonal planter boxes</li>
                            <li className="mb-2">Precisely measured and cut stone to 1/16th of an inch during construction of local park to be completed on a deadline</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Grocery Store Assistant Manager"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={ojibwayLogo} alt="Ojibway logo"/>
                        }
                    tagline = {
                        <div className="flex flex-col">
                            <h3>Ojibway Club, <i>Pointe au Baril, ON</i></h3>
                            <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />June 2020 - August 2021</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc mx-6"> 
                            <li className="mb-2">Responsible for the daily operations of a seasonal grocery store serving the Pointe au Baril community that brought in approx. $4000 a day</li>
                            <li className="mb-2">Communicated with retailers to place weekly orders to ensure shelves were stocked</li>
                            <li className="mb-2">Assisted with training and instructing a team of 8 employees</li>
                            <li className="mb-2">Followed proper fire safety protocols to fill boats with gas</li>
                            <li className="mb-2">Actively engaged with members and guests</li>
                            <li className="mb-2">Quickly adapted to new COVID-19 safety measures to maintain full scale store operations with additional daily tasks</li>
                            <li className="mb-2">Proficient with Lightspeed POS</li>
                        </ul>
                    }
                />
            </div>
        )
        },
        {id: "tab2", label: "Education", content: 
            (   
                <div className="grid grid-cols-1 gap-8">
                    <InfoBox 
                        title={"McGill University, Bachelor of Arts & Science in Cognitive Science"} 
                        media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={mcgillLogo} alt="McGill logo"/>
                        } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Montréal, QC</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />2020-2024</h2>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc mx-6">
                                {/* <li className="mb-2">Bachelor of Arts and Science in Cognitive Science</li> */}
                                <li className="mb-2">Computer Science minor</li>
                                <li className="mb-2">
                                    <span className="font-bold">Activities:</span>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>Varsity Alpine Ski Racing Team (Captain, Varsity Council Team Representative)</li>
                                        <li>SSMU Ski Club (Member)</li>
                                        <li>McGill Women in Tech (Member)</li>
                                        <li>McGill Women in Computer Science (Member)</li>
                                        <li>McGill Artificial Intelligence Society (Member)</li>
                                        <li>Intramural Soccer and Dodgeball</li>
                                    </ul>
                                </li>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4">
                                    <div>
                                        <div>
                                            <h2 className="font-bold text-lg text-primaryBlue">U0</h2>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold underline mb-1">Fall: </h3>
                                                <Course code={"CHEM110"} name={"General Chemistry 1"} link={"https://www.mcgill.ca/study/2020-2021/courses/chem-110"}/>
                                                <Course code={"MATH140"} name={"Calculus 1"} link={"https://www.mcgill.ca/study/2020-2021/courses/math-140"}/>
                                                <Course code={"PHYS101"} name={"Intro Physics - Mechanics"} link={"https://www.mcgill.ca/study/2020-2021/courses/phys-101"}/>
                                                <Course code={"PSYC100"} name={"Intro Psychology"} link={"https://www.mcgill.ca/study/2020-2021/courses/psyc-100"}/>
                                            <h3 className="font-semibold underline mt-1 mb-1">Winter: </h3>
                                                <Course code={"BIOL112"} name={"Cell and Molecular Biology"} link={"https://www.mcgill.ca/study/2020-2021/courses/biol-112"}/>
                                                <Course code={"CHEM120"} name={"General Chemistry 2"} link={"https://www.mcgill.ca/study/2020-2021/courses/chem-120"}/>
                                                <Course code={"MATH141"} name={"Calculus 2"} link={"https://www.mcgill.ca/study/2020-2021/courses/math-141"}/>
                                                <Course code={"PHYS102"} name={"Intro Physics - Electromagnetism & Optics"} link={"https://www.mcgill.ca/study/2020-2021/courses/phys-102"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="font-bold text-lg text-primaryBlue">U1</h2>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold underline mb-1">Fall: </h3>
                                                <Course code={"BIOL200"} name={"Molecular Biology"} link={"https://www.mcgill.ca/study/2021-2022/courses/biol-200"}/>
                                                <Course code={"CHEM212"} name={"Intro Organic Chemistry 1"} link={"https://www.mcgill.ca/study/2021-2022/courses/chem-212"}/>
                                                <Course code={"LING201"} name={"Intro to Linguistics"} link={"https://www.mcgill.ca/study/2021-2022/courses/ling-201"}/>
                                                <Course code={"NSCI200"} name={"Intro Neuroscience 1"} link={"https://www.mcgill.ca/study/2021-2022/courses/nsci-200"}/>
                                                <Course code={"PHIL221"} name={"Intro to History and Philosophy of Science"} link={"https://www.mcgill.ca/study/2021-2022/courses/phil-221"}/>
                                            <h3 className="font-semibold underline mt-1 mb-1">Winter: </h3>
                                                <Course code={"BASC201"} name={"Arts & Science Integrative Topics"} link={"https://www.mcgill.ca/study/2021-2022/courses/basc-201"}/>
                                                <Course code={"BIOL201"} name={"Cell Biology and Metabolism"} link={"https://www.mcgill.ca/study/2021-2022/courses/biol-201"}/>
                                                <Course code={"COMP202"} name={"Foundations of Programming"} link={"https://www.mcgill.ca/study/2021-2022/courses/comp-202"}/>
                                                <Course code={"NSCI201"} name={"Intro Neuroscience 2"} link={"https://www.mcgill.ca/study/2021-2022/courses/nsci-201"}/>
                                                <Course code={"PSYC204"} name={"Intro to Psychological Statistics"} link={"https://www.mcgill.ca/study/2021-2022/courses/psyc-204"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="font-bold text-lg text-primaryBlue">U2</h2>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold underline mb-1">Fall: </h3>
                                                <Course code={"BIOL306"} name={"Neural Basis of Behaviour"} link={"https://www.mcgill.ca/study/2022-2023/courses/biol-306"}/>
                                                <Course code={"CLAS201"} name={"Greece and Rome"} link={"https://www.mcgill.ca/study/2022-2023/courses/clas-201"}/>
                                                <Course code={"COMP250"} name={"Intro to Computer Science"} link={"https://www.mcgill.ca/study/2022-2023/courses/comp-250"}/>
                                                <Course code={"MATH133"} name={"Linear Algebra & Geometry"} link={"https://www.mcgill.ca/study/2022-2023/courses/math-133"}/>
                                                <Course code={"PHIL210"} name={"Intro to Deductive Logic"} link={"https://www.mcgill.ca/study/2022-2023/courses/phil-210"}/>
                                            <h3 className="font-semibold underline mt-1 mb-1">Winter: </h3>
                                                <Course code={"CLAS203"} name={"Greek Mythology"} link={"https://www.mcgill.ca/study/2022-2023/courses/clas-203"}/>
                                                <Course code={"COMP206"} name={"Intro to Software Systems"} link={"https://www.mcgill.ca/study/2022-2023/courses/comp-206"}/>
                                                <Course code={"MATH240"} name={"Discrete Structures"} link={"https://www.mcgill.ca/study/2022-2023/courses/math-240"}/>
                                                <Course code={"MATH323"} name={"Probability"} link={"https://www.mcgill.ca/study/2022-2023/courses/math-323"}/>
                                                <Course code={"PSYC213"} name={"Cognition"} link={"https://www.mcgill.ca/study/2022-2023/courses/psyc-213"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="font-bold text-lg text-primaryBlue">U3</h2>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold underline mb-1">Fall: </h3>
                                                <Course code={"COGS401"} name={"Cognitive Science Research"} link={"https://www.mcgill.ca/study/2023-2024/courses/cogs-401"}/>
                                                <Course code={"COMP251"} name={"Algorithms and Data Structures"} link={"https://www.mcgill.ca/study/2023-2024/courses/comp-251"}/>
                                                <Course code={"LING445"} name={"Computational Linguistics"} link={"https://www.mcgill.ca/study/2023-2024/courses/ling-445"}/>
                                                <Course code={"PSYC444"} name={"Sleep Mechanisms & Behaviour"} link={"https://www.mcgill.ca/study/2023-2024/courses/psyc-444"}/>
                                                <Course code={"WCOM203"} name={"Intro to Creative Writing"} link={"https://www.mcgill.ca/study/2023-2024/courses/wcom-203"}/>
                                            <h3 className="font-semibold underline mt-1 mb-1">Winter: </h3>
                                                <Course code={"COGS401"} name={"Cognitive Science Research"} link={"https://www.mcgill.ca/study/2023-2024/courses/cogs-401"}/>
                                                <Course code={"COMP345"} name={"From Natural Language to Data Science"} link={"https://www.mcgill.ca/study/2023-2024/courses/comp-345"}/>
                                                <Course code={"COMP551"} name={"Applied Machine Learning"} link={"https://www.mcgill.ca/study/2023-2024/courses/comp-551"}/>
                                                <Course code={"LING355"} name={"Language Acquisition"} link={"https://www.mcgill.ca/study/2023-2024/courses/ling-355"}/>
                                                <Course code={"PSYC433"} name={"Cognitive Science"} link={"https://www.mcgill.ca/study/2023-2024/courses/psyc-433"}/>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"National Ski Academy"} 
                        media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={nsaLogo} alt="NSA logo"/>
                        } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Collingwood, ON</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />2017-2019</h2>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Canada's only elite level ski academy</li>
                                <li className="mb-2">Trained and competed at an international level</li>
                                <li className="mb-2">Dedicated 40+ hours per week to athletics while balancing a full academic course load</li>
                                <li className="mb-2">Awarded for achieving the Best Racing Results and Highest Academic Average in both years at the school</li>
                            </ul>   
                        }
                    />
                </div>
            )
        },
        {id: "tab3", label: "Certifications", content: 
            (   
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox 
                        title={"The Complete Full-Stack Web Development Bootcamp"} 
                        // media={
                        //     <img className="h-37.5 w-37.5 rounded-xl" src={mcGillAthleticsLogo} alt="McGill Athletics logo"/>
                        // }  
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Udemy</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />July 2023</h2>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc mx-6">
                                <li className="mb-2">60+ hours of course content that covers web development topics such as HTML, CSS, JavaScript, jQuery, npm, Express.js, REST APIs, PostgreSQL, MongoDB, React.js, web design, deployment, and more.</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Figma UI UX Design Essentials"} 
                        // media={
                        //     <img className="h-37.5 w-37.5 rounded-xl" src={mcgillLogo} alt="McGill logo"/>
                        // }  
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Udemy</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />July 2023</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Learning how to use Figma to design user interfaces, wireframes, and prototypes.</li>
                            </ul>   
                        }
                    />
                    <InfoBox 
                        title={"The Complete SQL Bootcamp"} 
                        // media={
                        //     <img className="h-37.5 w-37.5 rounded-xl" src={alpineOntarioLogo} alt="Alpine Ontario logo"/> 
                        // } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Udemy</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />December 2023</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Building SQL skills from basic syntax to database design and management by using PostgreSQL and pgAdmin.</li>
                            </ul>   
                        }
                    />
                    <InfoBox 
                        title={"Docker & Kubernetes: The Practical Guide"} 
                        // media={
                        //     <img className="h-37.5 w-37.5 rounded-xl" src={alpineOntarioLogo} alt="Alpine Ontario logo"/> 
                        // } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Udemy</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />May 2024</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Learning Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes.</li>
                            </ul>   
                        }
                    />
                    <InfoBox 
                        title={"NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)"} 
                        // media={
                        //     <img className="h-37.5 w-37.5 rounded-xl" src={alpineOntarioLogo} alt="Alpine Ontario logo"/> 
                        // } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Udemy</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />August 2024</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Developing and mastering skills in Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL and much more.</li>
                            </ul>   
                        }
                    />
                </div>
            )
        },
        {id: "tab4", label: "Extra", content: 
            (   
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox 
                        title={"McGill Varsity Ski Team"} 
                        media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={mcGillAthleticsLogo} alt="McGill Athletics logo"/>
                        }  
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Montréal, QC</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />September 2020 - May 2023</h2>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc mx-6">
                                <li className="mb-2">Team Captain and Varsity Council Team Representative</li>
                                <li className="mb-2">Balanced a full university course load while training or competing five days a week</li> 
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"TEAM Mentor"} 
                        media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={mcgillLogo} alt="McGill logo"/>
                        }  
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Montréal, QC</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />September 2022 - December 2022</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">Received the Tomlinson Engagement Award for Mentoring for PHYS102: Electromagnetism &amp; Optics</li>
                                <li className="mb-2">Led a group of 15 students in weekly tutorials</li>
                                <li className="mb-2">Summarized essential concepts and completed practice problems</li>
                                <li className="mb-2">Encouraged collaboration among peers</li>
                                <li className="mb-2">Responded to emails with further questions</li>
                            </ul>   
                        }
                    />
                    <InfoBox 
                        title={"Ontario Ski Team Athlete"} 
                        media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={alpineOntarioLogo} alt="Alpine Ontario logo"/> 
                        } 
                        tagline = {
                            <div className="flex flex-col">
                                <h3><i>Collingwood, ON</i></h3>
                                <h2 className="font-light flex items-center gap-2"><IoCalendarClearOutline />April 2019 - March 2020</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc mx-6"> 
                                <li className="mb-2">One of three women selected for the provincial ski team</li>
                                <li className="mb-2">Travelled across North America and Europe for elite-level racing and training</li>
                                <li className="mb-2">Year-round commitment with upwards of 40 hours/week of training</li>
                                <li className="mb-2">Maintained a high level of physical fitness and attended monthly fitness testing, nutrition, mental well-being, and sports performance sessions at the Canadian Sports Institute of Ontario</li>
                                <li className="mb-2">Mentored younger athletes at races and training camps</li>
                            </ul>   
                        }
                    />
                </div>
            )
        },
    ]



  const paragraph = "text-black text-base font-normal leading-normal mb-2";

  return (
    <div className="body-box mb-3 max-md:mb-0">
        <Tabs tabs={tabs}></Tabs>
    </div>
  )
}

export default ExperiencePage