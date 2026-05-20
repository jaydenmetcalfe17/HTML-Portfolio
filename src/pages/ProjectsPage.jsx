import React from 'react'
// import '../assets/styles/projects.css'
import Video from '../components/Video'
import InfoBox from '../components/InfoBox'
import Tabs from '../components/Tabs'
import StackBox from '../components/StackBox'

import video1 from "/images/SpotItDemo.mp4"
import video2 from "/images/PointsCalculatorDemo.mp4"
import video3 from "/images/trainingtrackerwalkthrough.mp4"
import portfolioPic from "/images/portfolio-screenshot.png"

import { IoLogoGithub } from "react-icons/io";

const ProjectsPage = () => {
    const tabs = [
        {id: "tab1", label: "Personal", content: 
            (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoBox 
                    title={"Training Tracker"} 
                    media={
                            <Video source={video3}/>
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/jaydenmetcalfe17/training-tracker" target="_blank"><IoLogoGithub className="text-3xl hover:text-primaryBlue transition-transform duration-200 hover:scale-110"/></a>
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"React"}/>
                                <StackBox tool={"TypeScript"}/>
                                <StackBox tool={"Node.js"}/>
                                <StackBox tool={"Express.js"}/>
                                <StackBox tool={"PostgreSQL"}/>
                                <StackBox tool={"Python"}/>
                                <StackBox tool={"REST APIs"}/>
                                <StackBox tool={"OAuth 2.0"}/>
                                <StackBox tool={"Docker"}/>
                                <StackBox tool={"AWS"}/>
                                <StackBox tool={"Jest"}/>
                                <StackBox tool={"Vitest"}/>
                                <StackBox tool={"React Testing Library"}/>
                            </h3>
                        </div>
                    } 
                    bullets={
                        <ul> 
                            <li className="mb-2">Owned end-to-end development of a multi-service, full-stack training analytics web application</li>
                            <li className="mb-2">Implemented OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents</li>
                            <li className="mb-2">Designed and optimized RESTful APIs and SQL queries to support filtering and comparative analytics, 
                                                improving query efficiency and enabling data-driven adjustments to the training plan</li>
                            <li className="mb-2">Containerized using Docker to separate frontend, backend, and database services, improving scalability 
                                                and maintainability, then deployed the application as an Amazon Web Services (AWS) EC2 instance</li>
                            <li className="mb-2">Built unit and integration test suites using Jest, Vitest, and React Testing Library, improving 
                                                application reliability</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"FIS Points Calculator"} 
                    media={
                            <Video source={video2}/>
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/jaydenmetcalfe17/fis-points-calculator" target="_blank"><IoLogoGithub className="text-3xl hover:text-primaryBlue transition-transform duration-200 hover:scale-110"/></a>
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"Node.js"}/>
                                <StackBox tool={"Express.js"}/>
                                <StackBox tool={"Python"}/>
                                <StackBox tool={"REST APIs"}/>
                                <StackBox tool={"HTML/CSS"}/>
                                <StackBox tool={"JavaScript"}/>
                            </h3>
                        </div>
                    } 
                    bullets={
                        <ul>
                            <li className="mb-2">Alpine ski racers rely on a third party to calculate and upload results so they can determine what they "scored"</li> 
                            <li className="mb-2">Developed a program that reduces wait times from hours to seconds</li>   
                            <li className="mb-2">Users can enter a link from a live timing website, then the backend handles the API requests before retrieving data from the site</li>
                            <li className="mb-2">Python subprocess interprets the data and calculates the "score" for each racer</li>
                            <li className="mb-2">Results are displayed through a dynamic frontend built with HTML, CSS, JavaScript</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Spot It!"} 
                    media={
                            <Video source={video1}/>
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/jaydenmetcalfe17/spot-it" target="_blank"><IoLogoGithub className="text-3xl hover:text-primaryBlue transition-transform duration-200 hover:scale-110"/></a>
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"JavaScript"}/>
                                <StackBox tool={"HTML/CSS"}/>
                                <StackBox tool={"Node.js"}/>
                                <StackBox tool={"Express.js"}/>
                            </h3>
                        </div>
                    } 
                    bullets={
                        <ul> 
                            <li className="mb-2">Built a JavaScript version of one of my favourite games, Spot It</li>
                            <li className="mb-2">Computer has a randomized timer. If the player doesn't choose correctly 
                                                before the countdown finishes, then the computer wins that turn</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Personal Portfolio"} 
                    media={
                            <img src={portfolioPic} alt="screenshot of this site's homepage"/>
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/jaydenmetcalfe17/HTML-Portfolio" target="_blank"><IoLogoGithub className="text-3xl hover:text-primaryBlue transition-transform duration-200 hover:scale-110"/></a>
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"React"}/>
                                <StackBox tool={"JavaScript"}/>
                                <StackBox tool={"TailwindCSS"}/>
                            </h3>
                        </div>
                    } 
                    bullets={
                        <ul> 
                            <li className="mb-2">Designed and developed a custom portfolio website to provide further insight to my skills and experience</li>
                        </ul>
                    }
                />
            </div>
        )},
        {id: "tab2", label: "Academic", content: 
            (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox 
                        title={"Clustering and Language Phylogeny"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"lingpy"}/>
                                </h3>
                                <p>Built for a Natural Language and Data Science class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Used features of the lingpy library to cluster data and reconstruct a tree of cross-linguistic 
                                                    wordform data based on their optimal phylogenies (sound forms of words)</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Language Modeling and Semantic Parsing"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                </h3>
                                <p>Built for a Natural Language and Data Science class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Built an n-gram language model using Twitter data</li>
                                <li className="mb-2">Created functions that took a bigram and returned the most likely next word given
                                                    trigram frequencies in the dataset</li>
                                <li className="mb-2">Sampled possible next words without repetition when given a bigram</li>
                                <li className="mb-2">Generated sentences from a given prefix using a beam search algorithm</li>
                                <li className="mb-2">Developed an intent classifier and slot filler for semantic parsing</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Classification of Image Data"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"Keras/Tensorflow"}/>
                                    <StackBox tool={"PyTorch"}/>
                                </h3>
                                <p>Built for a Applied Machine Learning class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Collaborated on a group project to implement a multilayer perceptron (MLP) from scratch for classifying images 
                                                    from the MNIST Sign Language dataset</li>
                                <li className="mb-2">Compared model performance against a Convolutional Neural Network (CNN) built using Keras/TensorFlow and PyTorch</li>  
                                <li className="mb-2">Tested and tuned hyperparameters on a validation set to optimize classification accuracy</li>
                                <li className="mb-2">Implemented gradient descent and updated layer weights using backpropagated gradients, verified through perturbation analysis</li>
                                <li className="mb-2">Evaluated the impact of L2 regularization on the accuracy of a two-layer MLP</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Classification of Textual Data"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"scikit-learn"}/>
                                    <StackBox tool={"NumPy"}/>
                                    <StackBox tool={"Matplotlib"}/>
                                </h3>
                                <p>Built for a Applied Machine Learning class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Collaborated on a group project to implement logistic, multiclass, Ridge, and LASSO regression algorithms from 
                                                    scratch and compare their performance against Decision Trees on two textual datasets</li>
                                <li className="mb-2">Preprocessed text data by removing stop words and low-frequency terms, then identified top features for 
                                                    different classification categories</li>
                                <li className="mb-2">Used scikit-learn, NumPy, and Matplotlib to generate ROC curves, report AUROC metrics, compare classification 
                                                    accuracies, and analyze performance as a function of training dataset size</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"KNN and Decision Tree Implementation"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                            <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"scikit-learn"}/>
                                    <StackBox tool={"Matplotlib"}/>
                                </h3>
                                <p>Built for a Applied Machine Learning class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Collaborated on a group project to implement K-Nearest Neighbors (KNN) and Decision Tree classifiers 
                                                    from scratch and evaluate their AUROC and accuracy across two datasets</li>
                                <li className="mb-2">Tuned classifier hyperparameters using a validation set to determine optimal model performance</li>
                                <li className="mb-2">Analyzed and visualized results using Matplotlib and scikit-learn tools</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Wordle"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                </h3>
                                <p>Built for a Foundations of Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Developed a Wordle-style game with single-player and two-player modes</li>
                                <li className="mb-2">Single-player mode loads a word list from a file and selects a random target word</li>
                                <li className="mb-2">Two-player mode allows Player 1 to input a custom word for Player 2 to guess</li>
                                <li className="mb-2">Implemented guess validation logic that compares user input to the target word and returns 
                                                    colour-coded feedback based on Wordle rules</li>
                                <li className="mb-2">Limited the number of guesses to create structured gameplay and challenge constraints</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Reddit Bot"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                            <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"Reddit PRAW library"}/>
                                </h3>
                                <p>Built for a Foundations of Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Created a Reddit bot account to participate in a simulated election on a course-designed subreddit</li>
                                <li className="mb-2">Developed a bot that posts comments in support of a designated political candidate to simulate voter 
                                                    influence within the assignment constraints</li>
                                <li className="mb-2">Used the Reddit PRAW library to authenticate, access subreddit posts, comments, and replies, and track prior bot interactions</li>
                                <li className="mb-2">Implemented logic to avoid duplicate interactions by checking whether the bot had already commented on each item</li>
                                <li className="mb-2">Generated semi-random comments using a templated “Mad Libs”-style text file to increase variability in responses</li>
                                <li className="mb-2">Added a rate-limiting daemon to ensure the bot does not post more than once per minute</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Zombie Apocalypse"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                            <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Java"}/>
                                </h3>
                                <p>Built for an Intro to Computer Science/Object Oriented Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Developed a GUI-based 2D map system with region-based tiles, each containing attributes such as damage, time, and distance</li>
                                <li className="mb-2">Applied BFS and DFS to explore and compare potential paths between two points</li>
                                <li className="mb-2">Implemented Dijkstra's algorithm with weighted edges to determine the shortest path based on either minimum distance 
                                                    or fastest time, including support for required waypoints</li>
                                <li className="mb-2">Built a constrained shortest-path solution using the LARAC (Lagrangian Relaxation Based Aggregated Cost) algorithm 
                                                    to ensure health constraints were not violated en route to the destination</li>
                                <li className="mb-2">Generated optimal paths by balancing distance, time, and survivability constraints to reach a target location safely</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Cat Café"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Java"}/>
                                </h3>
                                <p>Built for an Intro to Computer Science/Object Oriented Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Designed a system that models cats with various traits and organises them by seniority using a binary search tree and by fur thickness using a max heap</li>
                                <li className="mb-2">Implemented insertion and deletion logic that maintains heap and tree properties through rotations, up-heap, and down-heap operations</li>
                                <li className="mb-2">Developed search algorithms to efficiently retrieve the most senior and most junior cats in the structure</li>
                                <li className="mb-2">Implemented an iterator to traverse the data structure and access stored elements sequentially</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Tower Defense Game"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Java"}/>
                                </h3>
                                <p>Built for an Intro to Computer Science/Object Oriented Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Developed a tower defence-style game where bees and hornets battle to defend opposing towers, 
                                                    supported by a GUI-based visual interface</li>
                                <li className="mb-2">Implemented multiple bee types using inheritance, with overridden attributes and behaviours to create distinct unit abilities</li>
                                <li className="mb-2">Built core game mechanics including unit placement, movement, health tracking, and attack interactions between opposing entities</li>
                                <li className="mb-2">Managed grid-based tile logic to track entity positions and update game state dynamically during simulation</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Solitaire Algorithm Cryptography"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Java"}/>
                                </h3>
                                <p>Built for an Intro to Computer Science/Object Oriented Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Focused on optimizing time complexity using Big-O analysis, targeting O(n) and O(1) performance where possible</li>
                                <li className="mb-2">Implemented the Solitaire cipher for message encryption and decryption, including construction of a custom deck-of-cards class</li>
                                <li className="mb-2">Generated a keystream using deck manipulation algorithms and applied it to encode plaintext messages</li>
                                <li className="mb-2">Built a corresponding decoding function to reverse the encryption process and recover the original message accurately</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Secret Chatroom"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                    <StackBox tool={"NumPy"}/>
                                    <StackBox tool={"pillow"}/>
                                    <StackBox tool={"Matplotlib"}/>
                                    <StackBox tool={"websocket-client"}/>
                                </h3>
                                <p>Built for a Foundations of Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Developed a system that converts binary strings (0s and 1s) into black-and-white pixel images</li>
                                <li className="mb-2">Implemented image manipulation functions that operate by modifying the underlying binary string representation</li>
                                <li className="mb-2">Supported transformations including inversion, horizontal and vertical flipping, cropping, compression, and decompression</li>
                                <li className="mb-2">Built a command-processing function capable of executing multiple image operations in sequence using shorthand commands</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Disease Tracker"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"Python"}/>
                                </h3>
                                <p>Built for a Foundations of Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul> 
                                <li className="mb-2">Focused on file I/O, docstrings, and doctest features to ensure correctness and documentation quality</li>
                                <li className="mb-2">Developed a simulation model for infectious disease contact tracing</li>
                                <li className="mb-2">Loaded and processed CSV data to track infection status, contacts, at-risk individuals, and degrees of separation from patient zero</li>
                                <li className="mb-2">Analysed and visualised results using charts, graphs, and textual output</li>
                                <li className="mb-2">Exported processed results to a separate output file for further analysis and record-keeping</li>
                            </ul>
                        }
                    />
                    <InfoBox 
                        title={"Intro to Git Group Project"} 
                        media={
                                <img/>
                            } 
                        tagline = {
                            <div className="flex flex-col gap-2">
                                <h3 className="font-light flex gap-2 flex-wrap">
                                    <StackBox tool={"C"}/>
                                </h3>
                                <p>Built for an Intro to Software Systems class.</p>
                            </div>
                        } 
                        bullets={
                            <ul>  
                                <li className="mb-2">Gained initial experience using shared Git repositories to collaborate with a team of developers on a private server</li>
                                <li className="mb-2">Learned and applied C project structure concepts including header (.h) files and Makefiles</li>
                                <li className="mb-2">Worked in a team of three using a shared repository on the school's local system to manage version control through push and pull workflows</li>
                                <li className="mb-2">Developed a phonebook application that reads contact data from a CSV file, performs modifications, and writes updates back to the same file</li>
                                <li className="mb-2">Implemented the application using a linked list data structure with functions for adding, deleting, and listing contacts</li>
                            </ul>
                        }
                    />
                </div>
            )
        }
    ]


  return (

    <div class="body-box">
        <Tabs tabs={tabs}></Tabs>
    </div>
  )
}

export default ProjectsPage