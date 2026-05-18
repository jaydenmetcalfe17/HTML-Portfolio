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

const ExperiencePage = () => {

    const tabs = [
        {id: "tab1", label: "Work", content: 
            (
            <div className="grid grid-cols-2 gap-4">
                <InfoBox 
                    title={"Full-Stack Software Developer & U16 Alpine Ski Racing Coach"} 
                    media={
                            <img className="h-37.5 w-37.5" src={wmscLogo} alt="WMSC logo"/>
                        } 
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">Whistler Mountain Ski Club, <i>Whistler, BC</i></h3>
                            <h2>November 2024 - present</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc">  
                            <li>Engineered a full-stack analytics web application using React, TypeScript, Node.js, Express.js, PostgreSQL, and Python to track and analyze athletes' training data</li>
                            <li>Implemented secure OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents</li>
                            <li>Architected and optimized RESTful APIs and SQL queries to support filtering and comparative analytics of hundreds of data points, improving query performance and enabling data-driven adjustments to team training programs</li>
                            <li>Containerized using Docker and Docker Compose to separate frontend, backend, and database services, improving scalability and maintainability, then deployed the application as an Amazon Web Services (AWS) EC2 instance</li>
                            <li>Collaborated with users to gather feedback and rapidly deliver feature updates in an iterative development process, often achieving same-day turnaround</li>
                            <li>Analyzed data to design and lead targeted training sessions for 40+ athletes while coordinating with a team of 6 coaches to optimize program structure and outcomes</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Reinforcement Learning Researcher"} 
                    media={
                            <img className="h-37.5 w-37.5" src={mcgillLogo} alt="McGill logo"/>
                        }
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">The Britt Lab, <i>Montréal, QC</i></h3>
                            <h2>August 2023 - May 2024</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc"> 
                            <li>Worked with a PhD candidate in Dr. Jonathan Britt's lab on a project involving reinforcement learning in mice</li>
                            <li>Automated data processing and reporting using Python and Excel, generating visualizations from thousands of data points to support behavioural research analysis</li>
                            <li>Implemented Q-learning models to simulate and analyze decision-making behaviour</li>
                            <li>Debugged and extended Arduino code to scale for multiple experimental stages, each with variables that required fine tuning to maximize the collection of usable data points</li>
                            <li>Wrote research paper and designed poster that was presented at McGill's Cognitive Science Research Day</li>
                        </ul>
                    }
                />
                <InfoBox // where to put job title??? Product Research, Design and Development Intern
                    title={"Product Research, Design and Development Intern"} 
                    media={
                            <img className="h-37.5 w-37.5" src={interacLogo} alt="Interac logo"/>
                        } 
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">Interac Corp., <i>Toronto, ON</i></h3>
                            <h2>May - August 2023</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc"> 
                            <li>Prototyped RESTful API endpoints and a PostgreSQL database schema for an escrow-based e-transfer solution to enhance transaction security and reduce fraud risk, which was demonstrated to senior leadershipy</li>
                            <li>Collaborated with cross-functional teams to build and update frontend features of an emulator using TypeScript and Angular within an MVC architecture, implementing UI/UX designs from Figma for client-specific product demos</li>
                            <li>Refactored legacy code to improve maintainability, scalability, and integration with new product features</li>
                        </ul>
                    }
                />
                <InfoBox 
                    // where to put job title???  Landscape Maintenance Worker
                    title={"Tutor"} 
                    media={
                            <img className="h-37.5 w-37.5" src={booksLogo} alt="Cartoon stack of books"/>
                        } 
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">Self-Employed, <i>Collingwood, ON</i></h3>
                            <h2>September 2019 - December 2022</h2> 
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc"> 
                            <li>Tutored 20+ elementary and high school aged students in a variety of subjects (i.e. math, English, science, social studies) over the years</li>
                            <li>Worked through practice problems, reviewed content for tests, strengthened confidence</li>
                            <li>Improved test grades by avg. 15%</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Landscape Maintenance Worker"} 
                    media={
                            <img className="h-37.5 w-37.5 rounded-xl" src={nbLogo} alt="Natural Blends logo"/>
                        }
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">Natural Blends, <i>Collingwood, ON</i></h3>
                            <h2>April 2020 - September 2022</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc"> 
                            <li>Worked 50+ hour weeks to complete routine yard maintenance at 40+ properties in the Southern Georgian Bay area</li>
                            <li>Performed spring clean up of property to prepare for warmer months</li>
                            <li>Maintained garden appearance by spreading soil and mulch, cutting edges around beds and planting over 2000+ trees and plants each spring</li>
                            <li>Assisted with the design and preparation of seasonal planter boxes</li>
                            <li>Precisely measured and cut stone to 1/16th of an inch during construction of local park to be completed on a deadline</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Grocery Store Assistant Manager"} 
                    media={
                            <img className="h-37.5 w-37.5" src={ojibwayLogo} alt="Ojibway logo"/>
                        }
                    tagline = {
                        <div className="flex justify-between">
                            <h3 className="font-light">Ojibway Club, <i>Pointe au Baril, ON</i></h3>
                            <h2>June 2020 - August 2021</h2>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc"> 
                            <li>Responsible for the daily operations of a seasonal grocery store serving the Pointe au Baril community that brought in approx. $4000 a day</li>
                            <li>Communicated with retailers to place weekly orders to ensure shelves were stocked</li>
                            <li>Assisted with training and instructing a team of 8 employees</li>
                            <li>Followed proper fire safety protocols to fill boats with gas</li>
                            <li>Actively engaged with members and guests</li>
                            <li>Quickly adapted to new COVID-19 safety measures to maintain full scale store operations with additional daily tasks</li>
                            <li>Proficient with Lightspeed POS</li>
                        </ul>
                    }
                />
            </div>
        )
        },
        {id: "tab2", label: "Education", content: 
            (   
                <div className="grid grid-cols-1 gap-4">
                    <InfoBox 
                        title={"McGill University"} 
                        media={
                            <img className="h-37.5 w-37.5" src={mcgillLogo} alt="McGill logo"/>
                        } 
                        tagline = {
                            <div className="flex justify-between">
                                <h3 className="font-light"><i>Montréal, QC</i></h3>
                                <h2>2020-2024</h2>
                            </div>
                        } 
                        bullets={
                            <div>
                                <p>Bachelor of Arts and Science in Cognitive Science</p>
                                <p>Computer Science minor</p>
                                <p>Make a component for courses with links for each</p>
                            </div>
                        }
                    />
                    <InfoBox 
                        title={"National Ski Academy"} 
                        media={
                            <img className="h-37.5 w-37.5" src={nsaLogo} alt="NSA logo"/>
                        } 
                        tagline = {
                            <div className="flex justify-between">
                                <h3 className="font-light"><i>Collingwood, ON</i></h3>
                                <h2>2017-2019</h2>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc"> 
                                <li>Canada's only elite level ski academy</li>
                                <li>Trained and competed at an international level</li>
                                <li>Dedicated 40+ hours per week to athletics while balancing a full academic course load</li>
                                <li>Awarded for achieving the Best Racing Results and Highest Academic Average in both years at the school</li>
                            </ul>   
                        }
                    />
                </div>
            )
        },
        {id: "tab3", label: "Extracurriculars", content: 
            (   
                <div className="grid grid-cols-2 gap-4">
                    <InfoBox 
                        title={"McGill Varsity Ski Team"} 
                        media={
                            <img className="h-37.5 w-37.5" src={mcGillAthleticsLogo} alt="McGill Athletics logo"/>
                        }  
                        tagline = {
                            <div className="flex justify-between">
                                <h3 className="font-light"><i>Montréal, QC</i></h3>
                                <h2>September 2020 - May 2023</h2>
                            </div>
                        } 
                        bullets={
                            <ul>
                                <li>Team Captain and Varsity Council Team Representative</li>
                                <li>Balanced a full university course load while training or competing five days a week</li> 
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"TEAM Mentor"} 
                        media={
                            <img className="h-37.5 w-37.5" src={mcgillLogo} alt="McGill logo"/>
                        }  
                        tagline = {
                            <div className="flex justify-between">
                                <h3 className="font-light"><i>Montréal, QC</i></h3>
                                <h2>September 2022 - December 2022</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc"> 
                                <li>Received the Tomlinson Engagement Award for Mentoring for PHYS102: Electromagnetism &amp; Optics</li>
                                <li>Led a group of 15 students in weekly tutorials</li>
                                <li>Summarized essential concepts and completed practice problems</li>
                                <li>Encouraged collaboration among peers</li>
                                <li>Responded to emails with further questions</li>
                            </ul>   
                        }
                    />
                    <InfoBox 
                        title={"Ontario Ski Team Athlete"} 
                        media={
                            <img className="h-37.5 w-37.5" src={alpineOntarioLogo} alt="Alpine Ontario logo"/> 
                        } 
                        tagline = {
                            <div className="flex justify-between">
                                <h3 className="font-light"><i>Collingwood, ON</i></h3>
                                <h2>April 2019 - March 2020</h2>
                            </div> 
                        } 
                        bullets={
                            <ul className="list-disc"> 
                                <li>One of three women selected for the provincial ski team</li>
                                <li>Travelled across North America and Europe for elite-level racing and training</li>
                                <li>Year-round commitment with upwards of 40 hours/week of training</li>
                                <li>Maintained a high level of physical fitness and attended monthly fitness testing, nutrition, mental well-being, and sports performance sessions at the Canadian Sports Institute of Ontario</li>
                                <li>Mentored younger athletes at races and training camps</li>
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






            {/* <!-- <h1>Experience</h1> --> */}

            <div className="flex flex-col rounded-lg bg-lightBlueBox p-6 gap-3">
                <h2 className="page-title">Education</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex justify-between w-full gap-1">
                            <img className="h-37.5 w-37.5" src={mcgillLogo} alt="mcgill logo"/>
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <h3 className="section-title">McGill University</h3>
                                    <p className="text-black text-lg font-bold leading-normal mb-2">2020-2024</p>
                                </div>
                                <p className={paragraph}>Bachelor of Arts and Science, Cognitive Science</p>
                                <ul className="list-disc text-black text-base font-normal">
                                    <li>Neuroscience Stream</li>
                                    <li>Computer Science minor</li>
                                    <li>Varsity Alpine Ski Racing Team (Captain, Varsity Council Team Representative), SSMU Ski Club (Member), McGill Women in Tech (Member), McGill Women in Computer Science (Member), McGill Artificial Intelligence Society (Member), Intramural Soccer and Dodgeball</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        <div id="u0" className="flex flex-col gap-1">
                            <h4 className="text-white text-lg font-bold leading-normal mb-0">U0</h4>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#AE2306]">Fall 2020</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>CHEM110</b> - General Chemistry 1</p>
                                    <p className={paragraph}><b>MATH140</b> - Calculus 1</p>
                                    <p className={paragraph}><b>PHYS101</b> - Intro Physics - Mechanics</p>
                                    <p className={paragraph}><b>PSYC100</b> - Intro Psychology</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#04269A]">Winter 2021</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>BIOL112</b> - Cell and Molecular Biology</p>
                                    <p className={paragraph}><b>CHEM120</b> - General Chemistry 2</p>
                                    <p className={paragraph}><b>MATH141</b> - Calculus 2</p>
                                    <p className={paragraph}><b>PHYS102</b> - Intro Physics - Electromagnetism &amp; Optics</p>
                                </div>
                            </div>
                        </div>
                        <div id="u1" className="flex flex-col gap-1">
                            <h4 className="text-white text-lg font-bold leading-normal mb-0">U1</h4>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#AE2306]">Fall 2021</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>BIOL200</b> - Molecular Biology</p>
                                    <p className={paragraph}><b>CHEM212</b> - Intro Organic Chemistry 1</p>
                                    <p className={paragraph}><b>LING201</b> - Intro to Linguistics</p>
                                    <p className={paragraph}><b>NSCI200</b> - Intro Neuroscience 1</p>
                                    <p className={paragraph}><b>PHIL221</b> - Intro to History and Philosophy of Science</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#04269A]">Winter 2022</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>BASC201</b> - Arts &amp; Science Integrative Topics</p>
                                    <p className={paragraph}><b>BIOL201</b> - Cell Biology and Metabolism</p>
                                    <p className={paragraph}><b>COMP202</b> - Foundations of Programming</p>
                                    <p className={paragraph}><b>NSCI201</b> - Intro Neuroscience 2</p>
                                    <p className={paragraph}><b>PSYC204</b> - Intro to Psychological Statistics</p>
                                </div>
                            </div>
                        </div>
                        <div id="u2" className="flex flex-col gap-1">
                            <h4 className="text-white text-lg font-bold leading-normal mb-0">U2</h4>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0text-[#AE2306]">Fall 2022</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>BIOL306</b> - Neural Basis of Behaviour</p>
                                    <p className={paragraph}><b>CLAS201</b> - Greece and Rome</p>
                                    <p className={paragraph}><b>COMP250</b> - Intro to Computer Science</p>
                                    <p className={paragraph}><b>MATH133</b> - Linear Algebra &amp; Geometry</p>
                                    <p className={paragraph}><b>PHIL210</b> - Intro to Deductive Logic</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#04269A]">Winter 2023</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>CLAS203</b> - Greek Mythology</p>
                                    <p className={paragraph}><b>COMP206</b> - Intro to Software Systems</p>
                                    <p className={paragraph}><b>MATH240</b> - Discrete Structures</p>
                                    <p className={paragraph}><b>MATH323</b> - Probability</p>
                                    <p className={paragraph}><b>PSYC213</b> - Cognition</p>
                                </div>
                            </div>
                        </div>
                        <div id="u3" className="flex flex-col gap-1">
                            <h4 className="text-white text-lg font-bold leading-normal mb-0">U3</h4>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#AE2306]">Fall 2023</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>COGS401</b> - Cognitive Science Research</p>
                                    <p className={paragraph}><b>COMP251</b> - Algorithms and Data Structures</p>
                                    <p className={paragraph}><b>LING445</b> - Computational Linguistics</p>
                                    <p className={paragraph}><b>PSYC444</b> - Sleep Mechanisms &amp; Behaviour</p>
                                    <p className={paragraph}><b>WCOM203</b> - Intro to Creative Writing</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-lg font-bold leading-normal mb-0 text-[#04269A]">Winter 2024</h5>
                                <div className="courses">
                                    <p className={paragraph}><b>COGS401</b> - Cognitive Science Research</p>
                                    <p className={paragraph}><b>COMP345</b> - From Natural Language to Data Science</p>
                                    <p className={paragraph}><b>COMP551</b> - Applied Machine Learning</p>
                                    <p className={paragraph}><b>LING355</b> - Language Acquisition</p>
                                    <p className={paragraph}><b>PSYC433</b> - Cognitive Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={nsaLogo} alt="nsa logo"/>
                        <div className="main-text"> 
                            <div className="flex justify-between">
                                <h3 className="section-title">National Ski Academy</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">2017-2019</p>
                            </div>
                            <p className={paragraph}>Ontario Secondary School Diploma</p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Canada's only elite level ski academy</li>
                                <li>Trained and competed at an international level</li>
                                <li>Dedicated 40+ hours per week to athletics while balancing a full academic course load</li>
                                <li>Awarded for achieving the Best Racing Results and Highest Academic Average in both years at the school</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={cciLogo} alt="cci logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Collingwood Collegiate Institute</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">2015-2017</p>
                            </div>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>MVP Junior Varsity Soccer</li>
                                <li>7x OFSAA Medallist in Alpine Skiing</li>
                                <ul className="list-disc text-black text-base font-normal">
                                    <li>5x Gold (4x Team, 1x Ind.)</li>
                                    <li>1x Silver Ind.</li>
                                    <li>1x Bronze Ind.</li>
                                </ul>
                                <li>Drumline member</li>
                                <ul className="list-disc text-black text-base font-normal">
                                    <li>Played in group performances and as part of the largest high school marching band in Canada</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col rounded-lg bg-lightBlueBox p-6 gap-3">
                <h2 className="page-title">Work Experience</h2>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={wmscLogo} alt="wmsc logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title"> Full Stack Software Developer & U16 Alpine Ski Racing Coach</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">November 2024 - present</p>
                            </div>
                            <p className={paragraph}>Whistler Mountain Ski Club, <i>Whistler, BC</i></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Engineered a full-stack analytics web application using React, TypeScript, Node.js, Express.js, PostgreSQL, and Python to track and analyze athletes' training data</li>
                                <li>Implemented secure OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents</li>
                                <li>Architected and optimized RESTful APIs and SQL queries to support filtering and comparative analytics of hundreds of data points, improving query performance and enabling data-driven adjustments to team training programs</li>
                                <li>Containerized using Docker and Docker Compose to separate frontend, backend, and database services, improving scalability and maintainability, then deployed the application as an Amazon Web Services (AWS) EC2 instance</li>
                                <li>Collaborated with users to gather feedback and rapidly deliver feature updates in an iterative development process, often achieving same-day turnaround</li>
                                <li>Analyzed data to design and lead targeted training sessions for 40+ athletes while coordinating with a team of 6 coaches to optimize program structure and outcomes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={mcgillLogo} alt="mcgill logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Reinforcement Learning Researcher</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">August 2023 - May 2024</p>
                            </div>
                            <p className={paragraph}>Britt Lab, <i>Montréal, QC</i></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Worked with a PhD candidate in Dr. Jonathan Britt's lab on a project involving reinforcement learning in mice</li>
                                <li>Automated data processing and reporting using Python and Excel, generating visualizations from thousands of data points to support behavioural research analysis</li>
                                <li>Implemented Q-learning models to simulate and analyze decision-making behaviour</li>
                                <li>Debugged and extended Arduino code to scale for multiple experimental stages, each with variables that required fine tuning to maximize the collection of usable data points</li>
                                <li>Wrote research paper and designed poster that was presented at McGill's Cognitive Science Research Day</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                    <img className="h-37.5 w-37.5" src={interacLogo} alt="interac logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Product Research, Design and Development Intern</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">May - August 2023</p>
                            </div>
                            <p className={paragraph}>Interac Corp., <i>Toronto, ON</i></p>
                            <p className={paragraph}><b>Largest interbank network in Canada that connects 300+ financial institutions across the nation. Over 90% of Canadians use Interac's e-Transfer and Debit services on a regular basis</b></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Prototyped RESTful API endpoints and a PostgreSQL database schema for an escrow-based e-transfer solution to enhance transaction security and reduce fraud risk, which was demonstrated to senior leadershipy</li>
                                <li>Collaborated with cross-functional teams to build and update frontend features of an emulator using TypeScript and Angular within an MVC architecture, implementing UI/UX designs from Figma for client-specific product demos</li>
                                <li>Refactored legacy code to improve maintainability, scalability, and integration with new product features</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={booksLogo} alt="book stack"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Tutor</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">September 2019 - December 2022</p>
                            </div>
                            <p className={paragraph}>Self-employed, <i>Collingwood, ON</i></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Tutored 20+ elementary and high school aged students in a variety of subjects (i.e. math, English, science, social studies) over the years</li>
                                <li>Worked through practice problems, reviewed content for tests, strengthened confidence</li>
                                <li>Improved test grades by avg. 15%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={nbLogo} alt="natural blends logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Landscape Maintenance Worker</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">April 2020 - July 2022</p>
                            </div>
                            <p className={paragraph}>Natural Blends, <i>Collingwood, ON</i></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Worked 50+ hour weeks to complete routine yard maintenance at 40+ properties in the Southern Georgian Bay area</li>
                                <li>Performed spring clean up of property to prepare for warmer months</li>
                                <li>Maintained garden appearance by spreading soil and mulch, cutting edges around beds and planting over 2000+ trees and plants each spring</li>
                                <li>Assisted with the design and preparation of seasonal planter boxes</li>
                                <li>Precisely measured and cut stone to 1/16th of an inch during construction of local park to be completed on a deadline</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-between">
                    <div className="flex justify-between w-full gap-1">
                        <img className="h-37.5 w-37.5" src={ojibwayLogo} alt="ojibway club logo"/>
                        <div className="main-text">
                            <div className="flex justify-between">
                                <h3 className="section-title">Grocery Store Assistant Manager</h3>
                                <p className="text-black text-lg font-bold leading-normal mb-2">June 2020 - August 2022</p>
                            </div>
                            <p className={paragraph}>Ojibway Club, <i>Pointe au Baril, ON</i></p>
                            <ul className="list-disc text-black text-base font-normal">
                                <li>Responsible for the daily operations of a seasonal grocery store serving the Pointe au Baril community that brought in approx. $4000 a day</li>
                                <li>Communicated with retailers to place weekly orders to ensure shelves were stocked</li>
                                <li>Assisted with training and instructing a team of 8 employees</li>
                                <li>Followed proper fire safety protocols to fill boats with gas</li>
                                <li>Actively engaged with members and guests</li>
                                <li>Quickly adapted to new COVID-19 safety measures to maintain full scale store operations with additional daily tasks</li>
                                <li>Proficient with Lightspeed POS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col rounded-lg bg-lightBlueBox p-6 gap-3">
                <h2 className="page-title">Extracurriculars</h2>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h3 className="section-title">McGill Varsity Alpine Ski Team</h3>
                        <p className="text-black text-lg font-bold leading-normal mb-2">September 2020 - May 2023</p>
                    </div>
                    <ul className="list-disc text-black text-base font-normal">
                        <li>Team Captain and Varsity Council Team Representative</li>
                        <li>Balanced a full university course load while training or competing five days a week</li> 
                    </ul>
                </div>

                 <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h3 className="section-title" >TEAM Mentor</h3>
                        <p className="text-black text-lg font-bold leading-normal mb-2">September 2022 - December 2022</p>
                    </div>
                    <ul className="list-disc text-black text-base font-normal">
                        <li>Received the Tomlinson Engagement Award for Mentoring for PHYS102: Electromagnetism &amp; Optics</li>
                        <li>Led a group of 15 students in weekly tutorials</li>
                        <li>Summarized essential concepts and completed practice problems</li>
                        <li>Encouraged collaboration among peers</li>
                        <li>Responded to emails with further questions</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h3 className="section-title">Ontario Ski Team Athlete</h3>
                        <p className="text-black text-lg font-bold leading-normal mb-2">April 2019 - March 2020</p>
                    </div>
                    <ul className="list-disc text-black text-base font-normal">
                        <li>One of three women selected for the provincial ski team</li>
                        <li>Travelled across North America and Europe for elite-level racing and training</li>
                        <li>Year-round commitment with upwards of 40 hours/week of training</li>
                        <li>Maintained a high level of physical fitness and attended monthly fitness testing, nutrition, mental well-being, and sports performance sessions at the Canadian Sports Institute of Ontario</li>
                        <li>Mentored younger athletes at races and training camps</li>
                    </ul>
                </div>

            </div>
        </div>
  )
}

export default ExperiencePage