import React, {useState} from 'react';
import './App.css';
import background from './images/background.png'; 
import Campaing from './Campaing';
import girlImage from './images/girl.jpg';
import { useNavigate } from 'react-router-dom';
import MoodTracker from './MoodTracker';
import imageNews from './images/photonews.jpg';
import News from './News';
import imageQuiz from './images/photopeople.webp';
import QuizGame from './QuizGame';


const ProjectTest = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleJoinButton = () => {
        setIsVisible(!isVisible);
    }

    const navigate = useNavigate();

    const handleStartJournaling = () => {
        navigate('/journalentry');

    }

    const handleArticlesButton = () => {
        navigate('/news');
    }

    const handleQuizButton = () => {
        navigate('/quizgame');
    }


    return(
        <>

            <div
                style={{ backgroundImage: `url(${background})` }}
                className="flex justify-center items-center w-full h-3/5 bg-no-repeat bg-cover bg-center ..."
            >
                <div className='w-full md:w-3/5 lg:w-2/5 h-full flex justify-center items-center flex-col content-center ring-4 bg-white bg-opacity-75 rounded-lg p-4 md:p-6'  >
                    <h2 className='xl:text-2xl text-xs md:text-3xl lg:text-4xl font-medium tracking-wide mb-2 text-center'>It's ok to not be okay, why I am hiding my struggles? </h2>

                    <p className='xl:text-xl text-xs w-3/4 text-wrap text-slate-950 mt-3.5 mb-3.5'>At Mental Health Appp, we believe in the power of understanding, compassion, and accessible support to transform lives. Our mission is to guide individuals towards a path of mental wellness and resilience, 
                        breaking down the barriers of stigma and shame that too often surround mental health.</p>
                    <button onClick={handleJoinButton} className="border xl:border-blue-500 xl:text-blue-500 text-xs hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-150">Join the campaign</button>
                </div>

                {isVisible && (
                    <Campaing />

                )}
            </div>

            <div className='flex justify-center items-center  w-full h-1/4 bg-sky-800'>
                <h2 className='text-3xl font-bold text-white'>We're fighting for mental health. For support. For respect. For you.</h2>
            </div>

            <div className='flex justify-center items-center flex-col xl:flex-row  w-full xl:h-2/4 h-auto '>
                <div className='w-1/2 flex justify-center items-center flex-col'>
                    <h2 className='xl:text-xl  font-bold mb-4'>Your Journal Online</h2>
                    <p className='text-center w-2/4 '>In this journal, we embark on a deeply personal journey of introspection, sharing our thoughts, feelings, and experiences as we navigate the complexities of mental health.</p>
                    <button onClick={handleStartJournaling} className='mt-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>Start Journaling</button>
               </div>
               <div className='w-1/2 flex justify-center items-center '>
                  <img src={girlImage} />
                </div>
            </div>

           <MoodTracker />

           <div className='flex items-center justify-center flex-col lx:flex-row  gap-8 p-5 bg-white shadow-lg rounded-lg max-w-4xl mx-auto'>
                    <div className='w-full lg:w-1/2'>
                        <img className='h-auto lx:w-96 w-auto rounded-lg shadow-md' src={imageNews}  />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-2xl font-semibold mb-2'>Media</h2>
                        <p className='mb-4'>Read the latest news and updates on mental health awareness and advocacy.</p>
                        <p className='w-full text-gray-600'>Mental health, a crucial component of overall well-being, has taken center stage in our lives, more so in recent times. With the aim to spread awareness, offer support, and break the stigma surrounding mental health issues, our platform is dedicated to bringing you the latest news, research, and insights from the mental health field. We believe in empowering individuals by providing them with the knowledge and resources they need to understand and manage their mental health. </p>
                        <button onClick={handleArticlesButton} className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded transition duration-150 ease-in-out mt-1.5 '>Find more articles</button>


                    </div>
           </div>

           <div className='w-full flex justify-center items-center bg-blue-50 p-4'>
                    <div className='max-w-4xl flex flex-col md:flex-row items-center gap-8'>
                        <div className='md:w-3/5 lg:w-2/3 px-4 md:px-8 py-6'>
                            <h2 className='text-2xl font-semibold text-blue-800 mb-4'>Your Well-being Check-in</h2>
                            <p className='text-md text-gray-700'>In today's fast-paced world, taking a moment to reflect on our emotional well-being is more important than ever. Our 'Understanding Your Emotional Well-being' quiz offers a gentle nudge towards self-reflection, helping you to pause and consider your current state of mind. While this quiz is not a substitute for professional diagnosis or treatment, it aims to provide insights into your feelings and encourage further exploration of your emotional health. Remember, acknowledging how you feel is the first step towards nurturing your mental well-being. If your journey through these questions suggests you might benefit from a conversation with a professional, we strongly encourage you to reach out for the support you deserve. Let's take this step towards self-awareness together, with kindness and without judgment.</p>
                            <button onClick={handleQuizButton} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transform transition duration-300 hover:scale-105 mt-2.5'>Start Quiz Game</button>
                        </div>

                        <div className='md:w-1/2 flex justify-center p-4'>
                            <img className='h-auto w-auto' src={imageQuiz}  />

                        </div>
                    </div>
            </div>

        </>
    );
}

export default ProjectTest;
