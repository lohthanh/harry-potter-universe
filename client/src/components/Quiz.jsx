import React, { useEffect, useState } from 'react';

const Quiz = (props) => {

    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [sortedHouse, setSortedHouse] = useState(null);

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
        }
    ]


    const handleAnswer = (questionId, choiceId) => {
        setAnswers({...answers, [questionId]: choiceId});
        setCurrentQuestion(currentQuestion + 1);
    }

    useEffect( () => {
        if (currentQuestion === questions.length) {
            calculateResult ();
        }
    }, [currentQuestion]);

    const handleReset = () => {
        setAnswers({});
        setCurrentQuestion(0);
        setSortedHouse(null);
    }

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

        const sortedHouse = Object.keys(houseVotes).reduce((a,b) => (houseVotes[a] > houseVotes[b] ? a : b));

        if (currentQuestion === questions.length - 1) {
            setSortedHouse(houseNames[sortedHouse]);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        setSortedHouse(houseNames[sortedHouse]);

    }

    const renderQuestion = () => {
        const question = questions[currentQuestion];

        return (
            <div>
                <h3>{question.question}</h3>
                <ul>
                    {question.choices.map( choice => (
                        <li key={choice.id}>
                            <button onClick={() => handleAnswer(currentQuestion, choice.id)}>{choice.content}</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const renderResult = () => {
        return (
            <div>
                <h2>Sorting Hat Results:</h2>
                <p>Congratulations! You have been sorted into {sortedHouse}.</p>
                <button onClick={handleReset}>Reset Quiz</button>
            </div>
        )
    }

  return (

    <div>
       {currentQuestion < questions.length ? renderQuestion() : renderResult()}
    </div>
  )
}

export default Quiz;