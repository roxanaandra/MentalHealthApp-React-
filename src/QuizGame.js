import React, {useState, useEffect} from 'react';

const questions = [
    {
      text: "In the past two weeks, how often have you felt little interest or pleasure in doing things?",
      options: [
        { id: 0, text: "Not at all", score: 0 },
        { id: 1, text: "Several days", score: 1 },
        { id: 2, text: "More than half the days", score: 2 },
        { id: 3, text: "Nearly every day", score: 3 },
      ],
    },


{
    text: "When faced with stress or challenges, how do you typically respond?",
    options: [
      { id: 0, text: "I struggle to cope and feel overwhelmed.", score: 0 },
      { id: 1, text: "I manage, but it's hard and often feels like too much.", score: 1 },
      { id: 2, text: "I have effective strategies but am always looking for improvements.", score: 2 },
      { id: 3, text: "I feel confident in my ability to manage stress effectively.", score: 3 },
    ],
  },
  {
    text: "How often do you engage in activities that you find truly fulfilling or that give you a sense of purpose?",
    options: [
      { id: 0, text: "Rarely or never", score: 0 },
      { id: 1, text: "Occasionally", score: 1 },
      { id: 2, text: "Quite often", score: 2 },
      { id: 3, text: "Almost always", score: 3 },
    ],
  },
  {
    text: "How would you describe your current level of self-esteem and confidence?",
    options: [
      { id: 0, text: "I often doubt myself and my abilities.", score: 0 },
      { id: 1, text: "I am sometimes confident, but I frequently have doubts.", score: 1 },
      { id: 2, text: "I am generally confident, with occasional doubts.", score: 2 },
      { id: 3, text: "I feel confident and secure in who I am.", score: 3 },
    ],
  },
  {
    text: "How much do you feel that your physical health impacts your overall well-being?",
    options: [
      { id: 0, text: "Significantly – my physical health challenges are a major barrier to my well-being.", score: 0 },
      { id: 1, text: "Moderately – there are some impacts, but I manage to cope.", score: 1 },
      { id: 2, text: "Slightly – there are minor issues, but nothing too concerning.", score: 2 },
      { id: 3, text: "Not at all – I am in good health and it positively influences my well-being.", score: 3 },
    ],
  },
  {
    text: "Looking back over the past month, how often have you felt optimistic about the future?",
    options: [
      { id: 0, text: "Rarely or never", score: 0 },
      { id: 1, text: "Sometimes", score: 1 },
      { id: 2, text: "Often", score: 2 },
      { id: 3, text: "Almost always", score: 3 },
    ],
  }

  ];

  const QuizGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    
    const data = localStorage.getItem('appJournalData');
    if (data) {
        const savedData = JSON.parse(data);
        setTotalScore(savedData.score);
        setShowResults(savedData.showResults);
    }
}, []);

  const handleOptionClick = (score) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    const newTotalScore = totalScore + score;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTotalScore(newTotalScore);
    } else {
      setShowResults(true);

      localStorage.setItem('appJournalData', JSON.stringify({ score: newTotalScore, showResults: true }));
    }

    
    

}


    return (
        <div className="bg-blue-100 w-full h-full flex justify-center items-center">
            {!showResults ? (
                <div>
                    <h2 className='text-xl font-semibold font-mono'>{questions[currentQuestionIndex].text}</h2>
                    <ul>
                        {questions[currentQuestionIndex].options.map((option) => (
                            <li key={option.id}>
                                <button className='bg-blue-500 mt-2.5 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 active:bg-blue-700 transition duration-150 ease-in-out' onClick={() => handleOptionClick(option.score)}>{option.text}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>Your Results</h2>
                    <p>You scored {totalScore} out of {questions.length * 3}.</p>

                    {totalScore < questions.length ? (
                        <p>Your answers suggest you may be feeling quite low. It might be helpful to talk to someone about this.</p>
                    ) : totalScore < 2 * questions.length ? (
                        <p>You seem to be doing relatively well, but there's always room for improvement.</p>
                    ) : (
                        <p>Great! You seem to be in a very positive place right now. Keep it up!</p>
                    )}
                </div>
            )}
        </div>
    );
};



export default QuizGame;