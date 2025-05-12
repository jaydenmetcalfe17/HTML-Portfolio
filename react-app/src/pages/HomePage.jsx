import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../components/Slideshow';
import '../assets/styles/homepage.scss'
import Resume from '../../public/Jayden-Metcalfe-Resume.pdf'

  const HomePage = () => {

  return (
    <div className="body-box">
            <div className="name-pic-box">
                <div className="name">
                    <h1 className="big-name">Jayden</h1>
                    <h1 className="big-name">Metcalfe</h1>
                </div>
            </div>
            <div className="about-me-box">
                <div className="headshot-circle">
                    <img src={import.meta.env.BASE_URL + "/images/headshot-resume.jpg"} height="200" width="200" alt="photo of myself"/>
                </div>
                <div>
                    <div className="about-text">
                        <p className="intro-paragraph">
                            I am a recent graduate from McGill University with a Bachelor of Arts and Science degree. I majored in Cognitive Science with a stream in neuroscience and minor in Computer Science. I have taken advantage of the unique program which allows students to incorporate numerous topics. My background knowledge is diverse as I have taken classes in many fields, including computer science, neuroscience, mathematics, linguistics, and philosophy. As my undergraduate career comes to a close, I find myself drawn to the world of software development as it combines my knack for puzzle-solving and passion for innovation and creativity.
                        </p>
                        <p className="intro-paragraph">
                            Over the past two years, I have utilized the free access to Udemy provided to McGill students to take courses on languages and frameworks that were not covered by the courses I've taken at McGill. In fact, all the front-end knowledge that I used in my Summer 2023 internship was learned while taking a Udemy web development course! 
                        </p>
                    </div>
                    <div className="button-block">
                        <a 
                            className="resume"
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

            <div className="about-me-box" id="skills-box">
                <h2 className="skills-title">Skills:</h2>
                <p className="skills-text">
                    <b>Languages:</b> Python, Java, C, Bash (Linux), HTML, CSS, JavaScript, TypeScript, Clojure
                </p>
                <p className="skills-text">
                    <b>Frameworks & Tools:</b> Git, Node.js, Angular, React, PostgreSQL, Arduino, Docker, Kubernetes, Keras/TensorFlow, scikit-learn, Figma
                </p>
            </div>

            <div className="about-me-box">
                <div className="gapyear-text">
                    <h2 className="skills-title">More About Me:</h2>
                    <p className="intro-paragraph">
                        After graduating high school, I took a gap year and competed internationally as a member of the Ontario Ski Team. This involved rigorous year-round training which I approached with great tenacity and dedication in order to achieve my goals in the sport. During my time in various countries, I developed a passion for travelling, photography/videography and journaling. For 1800 (and counting) days of my life, I have written a journal entry detailing everything I did that day since I love to have a memory of everything that I do.
                    </p>
                    <p className="intro-paragraph">
                        My other interests include playing squash, weightlifting, baking cookies, Greek and Roman mythology, and doing puzzles. My current "fun in my free time" goal is to become a pool shark. My secret talent is that I am really good at remembering birthdays.
                    </p>
                    <p className="intro-paragraph">
                        From a young age, I've wanted to move out west and become a "ski bum" for a season. In order to accomplish my goal, I moved to Whistler, BC to work as an alpine ski racing coach with the U16 team for the 2024-2025 winter.
                    </p>
                </div>
              <Slideshow />
            </div>

        </div>
  )
}

export default HomePage