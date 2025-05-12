import React from 'react'
import '../assets/styles/projects.scss'

const ProjectsPage = () => {
  return (
    <div class="body-box">
            {/* <!-- <h1>Projects</h1> --> */}
            <div class="projects-box" id="personal-projects">
                <h2>Personal Projects</h2>
                <div class="projects-list">
                    <div class="personal-project">
                        <div class="fis-text">
                            <h3>FIS Points Calculator</h3>
                            <p>
                                Currently, there is no publicly available way for alpine ski racers to calculate what they “scored” until a third party performs the calculation and uploads the file. This process can take hours. Knowing what you scored can be a make or break factor in how you feel about your performance as an athlete. The better you score, the lower your world ranking may become. 
                            </p>
                            <p>
                                As a result, I decided to develop a program to help reduce the time of this waiting game. A user can enter a link to a live-timing.com race results page. <b>Node.js</b> and <b>Express</b> handle the API requests and retrieve data from the third party live timing site. A <b>Python</b> backend spawned via a <b>Node.js</b> subprocess interprets and calculates the raw data. The results are displayed through a dynamic frontend built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
                            </p>
                            <p className="repo-link"><b>Link to the GitHub repository: </b><a href="https://github.com/jaydenmetcalfe17/fis-points-calculator">github.com/jaydenmetcalfe17/fis-points-calculator</a></p>
                        </div>
                        {/* <!-- <img class="project-pic" src="/public/images/Italy_carousel.JPG" alt="FIS Points Calculator Screenshot"/> --> */}
                    </div>

                    <div class="personal-project">
                        <div class="spot-it-text">
                            <h3>Spot It!</h3>
                            <p>
                                After being unable to find a valid online version of Spot It, I decided to create my own with a few changed symbols. The computer has a randomized timer. If the player doesn't choose correctly before the countdown finishes, then the computer wins that turn. 
                            </p>
                            <p>
                                Written using <b>Javascript, HTML</b> and <b>CSS</b> and launched with <b>Node.js</b> and <b>Express</b>.
                            </p>
                            <p className="repo-link"><b>Link to the GitHub repository: </b><a href="https://github.com/jaydenmetcalfe17/spot-it">github.com/jaydenmetcalfe17/spot-it</a></p>
                        </div>
                        {/* <!-- <img class="project-pic" src="/public/images/Italy_carousel.JPG" alt="FIS Points Calculator Screenshot"/> --> */}
                    </div>
                </div>
            </div>

            <div class="projects-box">
                <div class="upper-text">
                    <h2>Academic Projects</h2>
                    <p><b>No code can be shared due to academic integrity policies</b></p>
                </div>
                <div class="projects-list">
                    <div class="project" id="clustering">
                        <h3>Clustering and Language Phylogeny</h3>
                        <p>Built using <b>Python</b> as part of Nautral Language and Data Science class.</p>
                        <p>Used features of the <b>lingpy</b> library to cluster data and reconstruct a tree of cross-linguistic wordform data based on their optimal phylogenies (sound forms of words).</p>
                    </div>
                    <div class="project" id="semantic-parsing">
                        <h3>Language Modeling and Semantic Parsing</h3>
                        <p>Built using <b>Python</b> as part of Nautral Language and Data Science class.</p>
                        <p>Built an n-gram language model using Twitter data. Created functions that took a bigram and returned top possibilities for the next word given trigram frequencies in the data, sampled possibilities for the next word without repetition when given the bigram, and generated sentences starting with a given prefix using a beam search algorithm. The second part of the assignment involved building an intent classifier and a slot filler for semantic parsing.</p>
                    </div>
                    <div class="project" id="mnist">
                        <h3>Classification of Image Data</h3>
                        <p>Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p>As a group, we implemented a multilayer perceptron (MLP) from scratch to classify data from the MNIST sign language dataset then compared it to a Convolutional Neural Network (CNN) created using <b>Keras/Tensorflow</b> and <b>PyTorch</b> libraries. We tested various hyperparameters on a validation set to find the values that led to the highest accuracies. Gradient descent was performed. The gradients used to update each layer's weights were verified by small perturbation analysis. Accuracy was also compared when L2 regularization was added to a 2-layer MLP.</p>
                    </div>
                    <div class="project" id="regression">
                        <h3>Classification of Textual Data</h3>
                        <p>Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p>A group project where we implemented logistic regression and multiclass regression algorithms from scratch and compare them to Decision Trees for two distinct textual datasets. Regular regression models such as Ridge and LASSO were also implemented for comparison. The data was preprocessed to remove rare and stopwords then top features were determined for various classes. Further analysis was conducted using <b>sci-kitlearn</b>, <b>numpy</b> and <b>matplotlib</b> features to draw ROC curves, report AUROC values, compare classification accuracies, and test the results as a function of the size of the dataset by controlling the training set size.</p>
                    </div>

                    <div class="project" id="knn-dt">
                        <h3>KNN and Decision Tree Implementation</h3>
                        <p>Built using <b>Python</b> as part of an Applied Machine Learning Course</p>
                        <p>A group project where we implemented KNN and Decision Tree classifiers from scratch and used them to analyze AUROC and accuracy scores for two different datasets. Found the optimal hyperparameters for each classifier using a validation set. Analyzed data using <b>matplotlib</b> graphing methods and various <b>sci-kitlearn</b> tools.</p>
                    </div>

                    <div class="project" id="wordle">
                        <h3>Wordle</h3>
                        <p>Built using <b>Python</b> as part of a Foundations of Programming course.</p>
                        <p>The game has a 1 player (which loads a list of words from a file and chooses a random one) or a 2 player mode (where Player 1 can input a word of their choice for Player 2 to guess). The game checks the user's guess against the answer word then returns the guessed word with the letters coloured accordingly to the rules of Wordle. The user has a limited number of guesses.</p>
                    </div>

                    <div class="project" id="reddit">
                        <h3>Reddit Bot</h3>
                        <p>Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Uses Reddit PRAW library.
                        </p>
                        <p>Created a Reddit account for a bot that would rig a fake election that was set up on a Subreddit page created by the professors. The bot would post spam comments in support of a fake political candidate in order to garner support for them. 
                            <br/>
                        The program uses the Reddit PRAW library to log into the account, access all the posts, comments and replies on the given Subreddit then goes through everything to see if your bot has posted a comment under the respective item. When it reaches an item that your bot has not interacted with, it will generate a comment using a loaded text file with madlibs style fill-in-the-blank comments to increase the randomness of the comment. A bot daemon was used to ensure that the program would not post a comment more than once per minute.
                        </p>
                    </div>

                    <div class="project" id="zombie-apocalypse">
                        <h3>Zombie Apocalypse</h3>
                        <p>Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on learning how to implement algorithms into programs.
                        </p>
                        <p>2D maps was displayed using a GUI which had different regions. Each type of region tile had different damage, time, and distance values. The goal was to try and find various paths from point A to B in the most optimal way.  
                            <br/>
                            Used breadth first search and depth first search. Weighted edges were used to gauge the value of each connection between the tiles on the paths. Dijkstra's algorithm was implemented to find the shortest path based on either minimum distance or fastest time. The program took potential waypoints into account if certain stops were necessary in the path. 
                            <br/>
                            A constrained shortest path program was implemented using LARAC (Lagrangian Relaxation Based Aggregated Cost) algorithm which would track whether the amount of damage on the path would cause the user to die before making it to the safe house. The optimal path was created by using the best distance or time where health was not depleted. 
                        </p>
                    </div>

                    <div class="project" id="cat-cafe">
                        <h3>Cat Café</h3>
                        <p>Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on hierarchy, nodes, heaps, linked lists, and binary search trees.
                        </p>
                        <p>Different cats are created with traits based on age, and fur thickness. The cats are arranged by seniority in a combination of a binary search tree (for the cats' seniority) and a max heap (for the cats' fur thickness). When a cat is added or removed, the heap tree is reorganized using specific algorithms for left and right rotations, and upheaping and downheaping. Other algorithms are used to search the tree for the most senior or junior cat. An iterator is also implemented.</p>
                    </div>

                    <div class="project" id="tower-defense">
                        <h3>Tower Defense Game</h3>
                        <p>Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            First ever project built using Java with a heavy focus on classes and inheritance.
                        </p>
                        <p>The concept of the game is that bees and hornets fight in a tower defense game. A GUI gives us the ability to visually act out this game. Different types of bees are created using inheritance and different classes. Certain traits and abilities are overridden to make each bee unique. Functions were created with the purpose of knowing the locations of bees and hornets on the tiles, adding health, attacking opposing creatures, moving the creatures, and adding them to the tiles.</p>
                    </div>

                    <div class="project" id="solitaire">
                        <h3>Solitaire Algorithm Cryptography</h3>
                        <p>Built using <b>Java</b> as part of an Intro to Computer Science/Object Oriented Programming course.
                            <br/>
                            Focus on using O(n) or O(1) notation and reaching time complexity goals.
                        </p>
                        <p>Wrote code for the solitaire cipher for encoding and decoding messages. Create a program with a class for a deck of cards. A keystream is generated and used in the encryption process. Then another function works backwards to decode the message.</p>
                    </div>

                    <div class="project" id="secret-chatroom">
                        <h3>Secret Chatroom</h3>
                        <p>Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Uses numpy, pillow, matplotlib, and websocker-client libraries. 
                        </p>
                        <p>Takes a string of 0s and 1s and uses this information to create images with black and white pixels. Functions were created to manipulate the images by changing the string. The image could be inverted, flipped horizontally and vertically, cropped, compressed and decompressed. Another function was able to process multiple commands at once using short hand versions of the other manipulations.</p>
                    </div>

                    <div class="project" id="disease-tracker">
                        <h3>Disease Tracker</h3>
                        <p>Built using <b>Python</b> as part of a Foundations of Programming course.
                            <br/>
                            Focused on using fileIO, docstring and doctest features. First introduction to Object Oriented Programming. 
                        </p>
                        <p>Mimics contact tracing for the spread of an infectious disease. The program loads data from a CSV then runs it through functions which track who is infected, who has been contacted, who is potentially at risk, and the degrees of separation away from patient 0. The resulting data is then interpreted and displayed using charts, graphs, and plain text then stored in a separate file.</p>
                    </div>

                    <div class="project" id="git-project">
                        <h3>Intro to Git Group Project</h3>
                        <p>Built using <b>C</b> as part of an Intro to Software Systems course.
                            <br/>
                            First introduction to using shared Git repositories to collaborate with other developers over a private server. First look at .h files and makefiles. 
                        </p>
                        <p>Worked in a team of 3 using a shared repository on the school’s local system so we could push and pull code. Created a phonebook that would take data and load it from a CSV then write it back in the same CSV file after modifications. Built using a linked list with different functions for performing tasks such as adding, deleting, and listing contacts.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectsPage