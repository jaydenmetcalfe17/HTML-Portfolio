import React from 'react'
// import '../assets/styles/projects.css'
import Video from '../components/Video'
import InfoBox from '../components/InfoBox'
import Tabs from '../components/Tabs'
import StackBox from '../components/StackBox'

import video1 from "/images/SpotItDemo.mp4"
import video2 from "/images/PointsCalculatorDemo.mp4"
import video3 from "/images/trainingtrackerwalkthrough.mp4"

const ProjectsPage = () => {
    const tabs = [
        {id: "tab1", label: "Personal", content: 
            (
            <div className="grid grid-cols-2 gap-8">
                <InfoBox 
                    title={"Training Tracker"} 
                    media={
                            <Video source={video3}/>
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
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
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/training-tracker">github.com/jaydenmetcalfe17/training-tracker</a></p>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc">  
                            <li className="mb-2">Owned end-to-end development of a multi-service, full-stack training analytics web application.</li>
                            <li className="mb-2">Implemented OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents.</li>
                            <li className="mb-2">Designed and optimized RESTful APIs and SQL queries to support filtering and comparative analytics, improving query efficiency and enabling data-driven adjustments to the training plan.</li>
                            <li className="mb-2">Containerized using Docker to separate frontend, backend, and database services, improving scalability and maintainability, then deployed the application as an Amazon Web Services (AWS) EC2 instance.</li>
                            <li className="mb-2">Built unit and integration test suites using Jest, Vitest, and React Testing Library, improving application reliability</li>
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
                            <h3 className="font-light flex gap-2">
                                <StackBox tool={"Node.js"}/>
                                <StackBox tool={"Express.js"}/>
                                <StackBox tool={"Python"}/>
                                <StackBox tool={"REST APIs"}/>
                                <StackBox tool={"HTML/CSS"}/>
                                <StackBox tool={"JavaScript"}/>
                            </h3>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/fis-points-calculator">github.com/jaydenmetcalfe17/fis-points-calculator</a></p>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc">  
                            <li className="mb-2">Currently, there is no publicly available way for alpine ski racers to calculate what they “scored” until a third party performs the calculation and uploads the file. This process can take hours. Knowing what you scored can be a make or break factor in how you feel about your performance as an athlete. The better you score, the lower your world ranking may become.</li>
                            <li className="mb-2">As a result, I decided to develop a program to help reduce the time of this waiting game. A user can enter a link to a live-timing.com race results page. The backend handles the API requests and retrieves data from the third party live timing site. A Python subprocess interprets and calculates the raw data. The results are displayed through a dynamic frontend.</li>
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
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"JavaScript"}/>
                                <StackBox tool={"HTML/CSS"}/>
                                <StackBox tool={"Node.js"}/>
                                <StackBox tool={"Express.js"}/>
                            </h3>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/spot-it">github.com/jaydenmetcalfe17/spot-it</a></p>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc">  
                            <li className="mb-2">After being unable to find a valid online version of Spot It, I decided to create my own with a few changed symbols. The computer has a randomized timer. If the player doesn't choose correctly before the countdown finishes, then the computer wins that turn.</li>
                        </ul>
                    }
                />
                <InfoBox 
                    title={"Personal Portfolio"} 
                    media={
                            <img />
                        } 
                    tagline = {
                        <div className="flex flex-col gap-2">
                            <h3 className="font-light flex gap-2 flex-wrap">
                                <StackBox tool={"React"}/>
                                <StackBox tool={"JavaScript"}/>
                                <StackBox tool={"TailwindCSS"}/>
                            </h3>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/HTML-Portfolio">github.com/jaydenmetcalfe17/HTML-Portfolio</a></p>
                        </div>
                    } 
                    bullets={
                        <ul className="list-disc">  
                            <li className="mb-2">Designed and developed a custom portfolio website to provide further insight to my skills and experience.</li>
                        </ul>
                    }
                />
            </div>
        )},
        {id: "tab2", label: "Academic", content: 
            (
                <div className="grid grid-cols-2 gap-8">
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
                            <ul className="list-disc">  
                                <li className="mb-2">Used features of the lingpy library to cluster data and reconstruct a tree of cross-linguistic wordform data based on their optimal phylogenies (sound forms of words).</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Built an n-gram language model using Twitter data. Created functions that took a bigram and returned top possibilities for the next word given trigram frequencies in the data, sampled possibilities for the next word without repetition when given the bigram, and generated sentences starting with a given prefix using a beam search algorithm. The second part of the assignment involved building an intent classifier and a slot filler for semantic parsing.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">As a group, we implemented a multilayer perceptron (MLP) from scratch to classify data from the MNIST sign language dataset then compared it to a Convolutional Neural Network (CNN) created using Keras/Tensorflow and PyTorch libraries. We tested various hyperparameters on a validation set to find the values that led to the highest accuracies. Gradient descent was performed. The gradients used to update each layer's weights were verified by small perturbation analysis. Accuracy was also compared when L2 regularization was added to a 2-layer MLP.</li>
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
                                    <StackBox tool={"numpy"}/>
                                    <StackBox tool={"matplotlib"}/>
                                </h3>
                                <p>Built for a Applied Machine Learning class.</p>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc">  
                                <li className="mb-2">A group project where we implemented logistic regression and multiclass regression algorithms from scratch and compare them to Decision Trees for two distinct textual datasets. Regular regression models such as Ridge and LASSO were also implemented for comparison. The data was preprocessed to remove rare and stopwords then top features were determined for various classes. Further analysis was conducted using scikit-learn, numpy and matplotlib features to draw ROC curves, report AUROC values, compare classification accuracies, and test the results as a function of the size of the dataset by controlling the training set size.</li>
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
                                    <StackBox tool={"matplotlib"}/>
                                </h3>
                                <p>Built for a Applied Machine Learning class.</p>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc">  
                                <li className="mb-2">A group project where we implemented KNN and Decision Tree classifiers from scratch and used them to analyze AUROC and accuracy scores for two different datasets. Found the optimal hyperparameters for each classifier using a validation set. Analyzed data using matplotlib graphing methods and various scikit-learn tools.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">The game has a 1 player (which loads a list of words from a file and chooses a random one) or a 2 player mode (where Player 1 can input a word of their choice for Player 2 to guess). The game checks the user's guess against the answer word then returns the guessed word with the letters coloured accordingly to the rules of Wordle. The user has a limited number of guesses.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Created a Reddit account for a bot that would rig a fake election that was set up on a Subreddit page created by the professors. The bot would post spam comments in support of a fake political candidate in order to garner support for them. The program uses the Reddit PRAW library to log into the account, access all the posts, comments and replies on the given Subreddit then goes through everything to see if your bot has posted a comment under the respective item. When it reaches an item that your bot has not interacted with, it will generate a comment using a loaded text file with madlibs style fill-in-the-blank comments to increase the randomness of the comment. A bot daemon was used to ensure that the program would not post a comment more than once per minute.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2"> Focus on learning how to implement algorithms into programs.
                                                        2D maps was displayed using a GUI which had different regions. Each type of region tile had different damage, time, and distance values. The goal was to try and find various paths from point A to B in the most optimal way.
                                                        Used breadth first search and depth first search. Weighted edges were used to gauge the value of each connection between the tiles on the paths. Dijkstra's algorithm was implemented to find the shortest path based on either minimum distance or fastest time. The program took potential waypoints into account if certain stops were necessary in the path. 
                                                        A constrained shortest path program was implemented using LARAC (Lagrangian Relaxation Based Aggregated Cost) algorithm which would track whether the amount of damage on the path would cause the user to die before making it to the safe house. The optimal path was created by using the best distance or time where health was not depleted.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Focus on hierarchy, nodes, heaps, linked lists, and binary search trees. Different cats are created with traits based on age, and fur thickness. The cats are arranged by seniority in a combination of a binary search tree (for the cats' seniority) and a max heap (for the cats' fur thickness). When a cat is added or removed, the heap tree is reorganized using specific algorithms for left and right rotations, and upheaping and downheaping. Other algorithms are used to search the tree for the most senior or junior cat. An iterator is also implemented.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Large focus on inheritance. The concept of the game is that bees and hornets fight in a tower defense game. A GUI gives us the ability to visually act out this game. Different types of bees are created using inheritance and different classes. Certain traits and abilities are overridden to make each bee unique. Functions were created with the purpose of knowing the locations of bees and hornets on the tiles, adding health, attacking opposing creatures, moving the creatures, and adding them to the tiles.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Focus on using O(n) or O(1) notation and reaching time complexity goals. Wrote code for the solitaire cipher for encoding and decoding messages. Create a program with a class for a deck of cards. A keystream is generated and used in the encryption process. Then another function works backwards to decode the message.</li>
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
                                    <StackBox tool={"numpy"}/>
                                    <StackBox tool={"pillow"}/>
                                    <StackBox tool={"matplotlib"}/>
                                    <StackBox tool={"websocket-client"}/>
                                </h3>
                                <p>Built for a Foundations of Programming class.</p>
                            </div>
                        } 
                        bullets={
                            <ul className="list-disc">  
                                <li className="mb-2">Takes a string of 0s and 1s and uses this information to create images with black and white pixels. Functions were created to manipulate the images by changing the string. The image could be inverted, flipped horizontally and vertically, cropped, compressed and decompressed. Another function was able to process multiple commands at once using short hand versions of the other manipulations.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">Focused on using fileIO, docstring and doctest features. First introduction to Object Oriented Programming. Mimics contact tracing for the spread of an infectious disease. The program loads data from a CSV then runs it through functions which track who is infected, who has been contacted, who is potentially at risk, and the degrees of separation away from patient 0. The resulting data is then interpreted and displayed using charts, graphs, and plain text then stored in a separate file.</li>
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
                            <ul className="list-disc">  
                                <li className="mb-2">First introduction to using shared Git repositories to collaborate with other developers over a private server. First look at .h files and makefiles. Worked in a team of 3 using a shared repository on the school’s local system so we could push and pull code. Created a phonebook that would take data and load it from a CSV then write it back in the same CSV file after modifications. Built using a linked list with different functions for performing tasks such as adding, deleting, and listing contacts.</li>
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



    
            {/* <!-- <h1>Projects</h1> --> */}
            <div class="flex flex-col p-6 bg-lightBlueBox rounded-lg mb-3 max-md:mb-0" id="personal-projects">
                <h2 className="page-title">Personal Projects</h2>
                <div class="flex flex-col gap-3">
                    <div class="flex gap-1.5 flex-row max-[950px]:flex-col">
                        <div class="tracker-text">
                            <h3 className="section-title">Training Tracker</h3>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                <b>Stack: </b>React, TypeScript, Node.js, Express.js, PostgreSQL, Python, REST APIs, OAuth 2.0, Docker, Docker Compose, AWS, Jest, Vitest, React Testing Library  
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                               Owned end-to-end development of a multi-service, full-stack training analytics web application.
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                Implemented OAuth 2.0 authentication and role-based access control for coaches, athletes, and parents.
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                Designed and optimized RESTful APIs and SQL queries to support filtering and comparative analytics, improving query efficiency and enabling data-driven adjustments to the training plan.
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                Containerized using Docker to separate frontend, backend, and database services, improving scalability and maintainability, then deployed the application as an Amazon Web Services (AWS) EC2 instance.
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                Built unit and integration test suites using Jest, Vitest, and React Testing Library, improving application reliability
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/training-tracker">github.com/jaydenmetcalfe17/training-tracker</a></p>
                        </div>
                        <Video source={video3}/>
                        {/* <!-- <img class="project-pic" src="/images/Italy_carousel.JPG" alt="FIS Points Calculator Screenshot"/> --> */}
                    </div>

                    <div class="flex gap-1.5 flex-row max-[950px]:flex-col">
                        <div class="fis-text">
                            <h3 className="section-title">FIS Points Calculator</h3>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                <b>Stack: </b>Node.js, Express.js, Python, REST APIs, HTML/CSS, JavaScript
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                Currently, there is no publicly available way for alpine ski racers to calculate what they “scored” until a third party performs the calculation and uploads the file. This process can take hours. Knowing what you scored can be a make or break factor in how you feel about your performance as an athlete. The better you score, the lower your world ranking may become. 
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                As a result, I decided to develop a program to help reduce the time of this waiting game. A user can enter a link to a live-timing.com race results page. The backend handles the API requests and retrieves data from the third party live timing site. A Python subprocess interprets and calculates the raw data. The results are displayed through a dynamic frontend.
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/fis-points-calculator">github.com/jaydenmetcalfe17/fis-points-calculator</a></p>
                        </div>
                        <Video source={video2}/>
                        {/* <!-- <img class="project-pic" src="/images/Italy_carousel.JPG" alt="FIS Points Calculator Screenshot"/> --> */}
                    </div>

                    <div class="flex gap-1.5 flex-row max-[950px]:flex-col">
                        <div class="spot-it-text">
                            <h3 className="section-title">Spot It!</h3>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                <b>Stack: </b>JavaScript, HTML/CSS, Node.js, Express.js
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base">
                                After being unable to find a valid online version of Spot It, I decided to create my own with a few changed symbols. The computer has a randomized timer. If the player doesn't choose correctly before the countdown finishes, then the computer wins that turn. 
                            </p>
                            <p className="mt-0 leading-inherit font-inherit text-base"><b>Link to the GitHub repository: </b><a className="text-[#000000] underline" href="https://github.com/jaydenmetcalfe17/spot-it">github.com/jaydenmetcalfe17/spot-it</a></p>
                        </div>
                        {/* <!-- <img class="project-pic" src="/images/Italy_carousel.JPG" alt="FIS Points Calculator Screenshot"/> --> */}
                        <Video source={video1}/>
                    </div>
                </div>
            </div>

            <div class="flex flex-col p-6 bg-lightBlueBox rounded-lg">
                <div class="upper-text">
                    <h2 className="page-title">Academic Projects</h2>
                    <p className="mt-0 leading-inherit font-inherit text-base"><b>No code can be shared due to academic integrity policies</b></p>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="project" id="clustering">
                        <h3 className="section-title">Clustering and Language Phylogeny</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of Natural Language and Data Science class.</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Used features of the <b>lingpy</b> library to cluster data and reconstruct a tree of cross-linguistic wordform data based on their optimal phylogenies (sound forms of words).</p>
                    </div>
                    <div class="project" id="semantic-parsing">
                        <h3 className="section-title">Language Modeling and Semantic Parsing</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of Natural Language and Data Science class.</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built an n-gram language model using Twitter data. Created functions that took a bigram and returned top possibilities for the next word given trigram frequencies in the data, sampled possibilities for the next word without repetition when given the bigram, and generated sentences starting with a given prefix using a beam search algorithm. The second part of the assignment involved building an intent classifier and a slot filler for semantic parsing.</p>
                    </div>
                    <div class="project" id="mnist">
                        <h3 className="section-title">Classification of Image Data</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">As a group, we implemented a multilayer perceptron (MLP) from scratch to classify data from the MNIST sign language dataset then compared it to a Convolutional Neural Network (CNN) created using <b>Keras/Tensorflow</b> and <b>PyTorch</b> libraries. We tested various hyperparameters on a validation set to find the values that led to the highest accuracies. Gradient descent was performed. The gradients used to update each layer's weights were verified by small perturbation analysis. Accuracy was also compared when L2 regularization was added to a 2-layer MLP.</p>
                    </div>
                    <div class="project" id="regression">
                        <h3 className="section-title">Classification of Textual Data</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">A group project where we implemented logistic regression and multiclass regression algorithms from scratch and compare them to Decision Trees for two distinct textual datasets. Regular regression models such as Ridge and LASSO were also implemented for comparison. The data was preprocessed to remove rare and stopwords then top features were determined for various classes. Further analysis was conducted using <b>scikit-learn</b>, <b>numpy</b> and <b>matplotlib</b> features to draw ROC curves, report AUROC values, compare classification accuracies, and test the results as a function of the size of the dataset by controlling the training set size.</p>
                    </div>

                    <div class="project" id="knn-dt">
                        <h3 className="section-title">KNN and Decision Tree Implementation</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">A group project where we implemented KNN and Decision Tree classifiers from scratch and used them to analyze AUROC and accuracy scores for two different datasets. Found the optimal hyperparameters for each classifier using a validation set. Analyzed data using <b>matplotlib</b> graphing methods and various <b>scikit-learn</b> tools.</p>
                    </div>

                    <div class="project" id="wordle">
                        <h3 className="section-title">Wordle</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of a Foundations of Programming course.</p>
                        <p className="mt-0 leading-inherit font-inherit text-base">The game has a 1 player (which loads a list of words from a file and chooses a random one) or a 2 player mode (where Player 1 can input a word of their choice for Player 2 to guess). The game checks the user's guess against the answer word then returns the guessed word with the letters coloured accordingly to the rules of Wordle. The user has a limited number of guesses.</p>
                    </div>

                    <div class="project" id="reddit">
                        <h3 className="section-title">Reddit Bot</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Uses Reddit PRAW library.
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Created a Reddit account for a bot that would rig a fake election that was set up on a Subreddit page created by the professors. The bot would post spam comments in support of a fake political candidate in order to garner support for them. 
                            <br/>
                        The program uses the Reddit PRAW library to log into the account, access all the posts, comments and replies on the given Subreddit then goes through everything to see if your bot has posted a comment under the respective item. When it reaches an item that your bot has not interacted with, it will generate a comment using a loaded text file with madlibs style fill-in-the-blank comments to increase the randomness of the comment. A bot daemon was used to ensure that the program would not post a comment more than once per minute.
                        </p>
                    </div>

                    <div class="project" id="zombie-apocalypse">
                        <h3 className="section-title">Zombie Apocalypse</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on learning how to implement algorithms into programs.
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">2D maps was displayed using a GUI which had different regions. Each type of region tile had different damage, time, and distance values. The goal was to try and find various paths from point A to B in the most optimal way.  
                            <br/>
                            Used breadth first search and depth first search. Weighted edges were used to gauge the value of each connection between the tiles on the paths. Dijkstra's algorithm was implemented to find the shortest path based on either minimum distance or fastest time. The program took potential waypoints into account if certain stops were necessary in the path. 
                            <br/>
                            A constrained shortest path program was implemented using LARAC (Lagrangian Relaxation Based Aggregated Cost) algorithm which would track whether the amount of damage on the path would cause the user to die before making it to the safe house. The optimal path was created by using the best distance or time where health was not depleted. 
                        </p>
                    </div>

                    <div class="project" id="cat-cafe">
                        <h3 className="section-title">Cat Café</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on hierarchy, nodes, heaps, linked lists, and binary search trees.
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Different cats are created with traits based on age, and fur thickness. The cats are arranged by seniority in a combination of a binary search tree (for the cats' seniority) and a max heap (for the cats' fur thickness). When a cat is added or removed, the heap tree is reorganized using specific algorithms for left and right rotations, and upheaping and downheaping. Other algorithms are used to search the tree for the most senior or junior cat. An iterator is also implemented.</p>
                    </div>

                    <div class="project" id="tower-defense">
                        <h3 className="section-title">Tower Defense Game</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            First ever project built using Java with a heavy focus on classes and inheritance.
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">The concept of the game is that bees and hornets fight in a tower defense game. A GUI gives us the ability to visually act out this game. Different types of bees are created using inheritance and different classes. Certain traits and abilities are overridden to make each bee unique. Functions were created with the purpose of knowing the locations of bees and hornets on the tiles, adding health, attacking opposing creatures, moving the creatures, and adding them to the tiles.</p>
                    </div>

                    <div class="project" id="solitaire">
                        <h3 className="section-title">Solitaire Algorithm Cryptography</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on using O(n) or O(1) notation and reaching time complexity goals.
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Wrote code for the solitaire cipher for encoding and decoding messages. Create a program with a class for a deck of cards. A keystream is generated and used in the encryption process. Then another function works backwards to decode the message.</p>
                    </div>

                    <div class="project" id="secret-chatroom">
                        <h3 className="section-title">Secret Chatroom</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Uses numpy, pillow, matplotlib, and websocker-client libraries. 
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Takes a string of 0s and 1s and uses this information to create images with black and white pixels. Functions were created to manipulate the images by changing the string. The image could be inverted, flipped horizontally and vertically, cropped, compressed and decompressed. Another function was able to process multiple commands at once using short hand versions of the other manipulations.</p>
                    </div>

                    <div class="project" id="disease-tracker">
                        <h3 className="section-title">Disease Tracker</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Focused on using fileIO, docstring and doctest features. First introduction to Object Oriented Programming. 
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Mimics contact tracing for the spread of an infectious disease. The program loads data from a CSV then runs it through functions which track who is infected, who has been contacted, who is potentially at risk, and the degrees of separation away from patient 0. The resulting data is then interpreted and displayed using charts, graphs, and plain text then stored in a separate file.</p>
                    </div>

                    <div class="project" id="git-project">
                        <h3 className="section-title">Intro to Git Group Project</h3>
                        <p className="mt-0 leading-inherit font-inherit text-base">Built using <b>C</b> as part of an Intro to Software Systems course.
                            <br/>
                            First introduction to using shared Git repositories to collaborate with other developers over a private server. First look at .h files and makefiles. 
                        </p>
                        <p className="mt-0 leading-inherit font-inherit text-base">Worked in a team of 3 using a shared repository on the school’s local system so we could push and pull code. Created a phonebook that would take data and load it from a CSV then write it back in the same CSV file after modifications. Built using a linked list with different functions for performing tasks such as adding, deleting, and listing contacts.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectsPage