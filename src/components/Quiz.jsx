import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import styles from './Display.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const Quiz = (props) => {

    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [sortedHouse, setSortedHouse] = useState(null);
    const [questionSet, setQuestionSet] = useState([]);

    const houseNames = {
        Gryffindor: 'Gryffindor',
        Slytherin: 'Slytherin',
        Ravenclaw: 'Ravenclaw',
        Hufflepuff: 'Hufflepuff'
    };

    const questions = [
        {
            question: "What is your preferred type of environment?",
            choices: [
                { id: 'a', content: 'A cozy room with books and a fireplace.' },
                { id: 'b', content: 'A lively party with music and laughter.' },
                { id: 'c', content: 'An outdoor adventure in the wilderness.' },
                { id: 'd', content: 'A quiet and peaceful garden.' }
            ]
        },
        {
            question: 'In a difficult situation, what quality do you rely on the most?',
            choices: [
                { id: 'a', content: 'Courage' },
                { id: 'b', content: 'Intuition' },
                { id: 'c', content: 'Wit' },
                { id: 'd', content: 'Patience' }
            ]
        },
        {
            question: "Which quality do you value most in a friend?",
            choices: [
                { id: 'a', content: 'Loyalty' },
                { id: 'b', content: 'Bravery' },
                { id: 'c', content: 'Intelligence' },
                { id: 'd', content: 'Kindness' }
            ]
        },
        {
            question: "What type of magical creature would you like as a pet?",
            choices: [
                { id: 'a', content: 'Owl' },
                { id: 'b', content: 'Dragon' },
                { id: 'c', content: 'Phoenix' },
                { id: 'd', content: 'Hippogriff' }
            ]
        },
        {
            question: "Which subject at Hogwarts would you be most excited to study?",
            choices: [
                { id: 'a', content: 'Potions' },
                { id: 'b', content: 'Defense Against the Dark Arts' },
                { id: 'c', content: 'Transfiguration' },
                { id: 'd', content: 'Care of Magical Creatures' }
            ]
        },
        {
            question: "If you found a wallet containing a large sum of money, what would you do?",
            choices: [
                { id: 'a', content: 'Return it to its owner without hesitation.' },
                { id: 'b', content: 'Keep it and use it for something important.' },
                { id: 'c', content: 'Use some of it and give the rest to charity.' },
                { id: 'd', content: 'Take a small reward for yourself and return the rest.' }
            ]
        },
        {
            question: "Which element appeals to you the most?",
            choices: [
                { id: 'a', content: 'Fire' },
                { id: 'b', content: 'Water' },
                { id: 'c', content: 'Air' },
                { id: 'd', content: 'Earth' }
            ]
        },
        {
            question: "How would you describe your personality?",
            choices: [
                { id: 'a', content: 'Ambitious and determined' },
                { id: 'b', content: 'Calm and intuitive' },
                { id: 'c', content: 'Creative and curious' },
                { id: 'd', content: 'Loyal and patient' }
            ]
        },
        {
            question: "Which magical object would you most like to possess?",
            choices: [
                { id: 'a', content: 'Invisibility Cloak' },
                { id: 'b', content: 'Time-Turner' },
                { id: 'c', content: "Marauder's Map" },
                { id: 'd', content: "Philosopher's Stone" }
            ]
        },
        {
            question: "If you see someone drowning, what would you do?",
            choices: [
                { id: 'a', content: 'Dive in and rescue them without hesitation.' },
                { id: 'b', content: 'You stand and yell for help.' },
                { id: 'c', content: 'You can not swim, so you look for something to help drag them out.' },
                { id: 'd', content: "Run away, pretend you didn't see." }
            ]
        },
        {
            question: "Which magical spell would you want to master?",
            choices: [
                { id: 'a', content: 'Expelliarmus' },
                { id: 'b', content: 'Wingardium Leviosa' },
                { id: 'c', content: 'Lumos' },
                { id: 'd', content: 'Sectumsempra' }
            ]
        },
        {
            question: "What position would you prefer to play in a game of Quidditch?",
            choices: [
                { id: 'a', content: 'Seeker - Chasing after the Golden Snitch to end the game.' },
                { id: 'b', content: 'Keeper - Guarding the goalposts and defending against scoring attempts.' },
                { id: 'c', content: 'Chaser - Scoring goals by throwing the Quaffle through the hoops.' },
                { id: 'd', content: 'Beater - Using a bat to protect teammates and disrupt opposing players.' }
            ]
        }
    ]


    const handleAnswer = (questionId, choiceId) => {
        setAnswers({ ...answers, [questionId]: choiceId });
        setCurrentQuestion(currentQuestion + 1);
    }

    useEffect(() => {
        if (currentQuestion === 5) {
            calculateResult();
        }
    }, [currentQuestion]);


    const handleReset = () => {
        const randomQuestions = getRandom(5);
        setAnswers({});
        setCurrentQuestion(0);
        setSortedHouse(null);
        setQuestionSet(randomQuestions);
    };

    const getRandom = number => {
        const shuffleQuestions = questions.sort(() => Math.random() - 0.5);
        return shuffleQuestions.slice(0, number);
    };

    const patronus = ['Stag', 'Jack Russell Terrier', 'Otter', 'Horse', 'Hare', 'Phoenix', 'Doe', 'Cat', 'Wold', 'Weasel', 'Lynx', 'Fox', 'Swan', 'Boar', 'Goat']
    const wandCore = ['Unicorn Hair', 'Dragon Heartstring', 'Phoenix Feather', 'Veela Hair', 'Thestral Tail Hair', 'Troll Whisker', 'Kelpie Hair', 'Thunderbird Tail Feather', 'Wampus Cat Hair', 'White River Monster Spine', 
                        'Rougarou Hair', 'Kneazle Whiskers', 'Horned Serpent Horn', 'Snallygaster Heartstring', 'Jackalope Antler', 'Basilisk Horn']

    const randomElement = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const randomPatronus = randomElement(patronus);
    const randomWandCore = randomElement(wandCore);

    const calculateResult = () => {
        const houseVotes = {
            Gryffindor: 0,
            Slytherin: 0,
            Ravenclaw: 0,
            Hufflepuff: 0
        };

        Object.values(answers).forEach(choiceId => {
            if (choiceId === 'a') {
                houseVotes.Gryffindor += 1;
            } else if (choiceId === 'b') {
                houseVotes.Slytherin += 1;
            } else if (choiceId === 'c') {
                houseVotes.Ravenclaw += 1;
            } else if (choiceId === 'd') {
                houseVotes.Hufflepuff += 1;
            }
        });

        const sortedHouse = Object.keys(houseVotes).reduce((a, b) => (houseVotes[a] > houseVotes[b] ? a : b));

        if (currentQuestion === questions.length - 1) {
            setSortedHouse(houseNames[sortedHouse]);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        setSortedHouse(houseNames[sortedHouse]);

    }

    const sortedHeads = {
        Gryffindor: <img src={'https://i.gifer.com/12sE.gif'} alt='professor-minerva-mcgonagall' />,
        Hufflepuff: <img src={'https://2.bp.blogspot.com/-WWPOQpAP6Sg/VVTLkAqdBXI/AAAAAAAAu5g/SC62l1MLudI/s1600/Harry-Potter-Pomona-Sprout-GIF-1430702825.gif'} alt='professor-pomana-sprout' />,
        Ravenclaw: <img src={'https://images2.fanpop.com/image/photos/9300000/Another-day-with-Umbridge-hogwarts-professors-9350047-300-155.gif'} alt='professor-filius-flitwick' />,
        Slytherin: <img src={'https://media.tenor.com/XJbMfck_ifgAAAAC/snape-clap.gif'} alt='professor-severus-snape' />,
    }


    const renderQuestion = () => {
        const randomQuestions = getRandom(5);
        const questions = randomQuestions[currentQuestion]

        return (
            <div>
                <h2 className={styles.textColor}>{questions.question}</h2>
                <ul>
                    {questions.choices.map(choice => (
                        <li key={choice.id}>
                            <button className={styles.btn} onClick={() => handleAnswer(currentQuestion, choice.id)}>{choice.content}</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const renderResult = () => {
        let houseTheme = '';

        switch (sortedHouse) {
            case 'Gryffindor':
                houseTheme = styles.gryffindorTheme;
                break;
            case 'Slytherin':
                houseTheme = styles.slytherinTheme;
                break;
            case 'Ravenclaw':
                houseTheme = styles.ravenclawTheme;
                break;
            case 'Hufflepuff':
                houseTheme = styles.hufflepuffTheme;
                break;
            default:
                break;
        }


        return (
            <div>
                <motion.h2 className={`${styles.textColor} ${styles.h2Tag}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'linear' }}>Congratulations! Welcome to <span className= {`${houseTheme}`}>{sortedHouse}</span>.</motion.h2>
                    <p className={`${styles.textColor} ${styles.pTag}`}>Your patronus is {randomPatronus} and your wand core is {randomWandCore}.</p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'linear' }}>
                    {sortedHeads[sortedHouse]}
                </motion.div>
                <button className={styles.btn} onClick={handleReset}>Reset Quiz</button>
            </div>
        )
    }

    return (
        <div className={`${styles.bgQuiz}`}>
            <NavBar />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'linear' }}>
                {currentQuestion < 5 ? renderQuestion() : renderResult()}
            </motion.div>
        </div>
    )
}

export default Quiz;