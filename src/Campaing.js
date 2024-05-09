import React from "react";
import { useNavigate } from 'react-router-dom';


const Campaing = () => {
    const navigate = useNavigate();

    const handleLearnButton = () => {
        navigate('/learnpage');
    

    }


    return(
        <div className="p-4 mt-5 bg-white shadow-md rounded-lg xl:rounded-xl xl:max-w-md mx-auto w-full">
            <h2 className="xl:text-lg font-semibold ">'It’s okay to not be okay' </h2>
            <p className="mt-2 ">Join our campaign to raise awareness about mental health. Together, we can make a difference.</p>
            <button onClick={handleLearnButton} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Learn More</button>
        </div>
    );
}

export default Campaing;
