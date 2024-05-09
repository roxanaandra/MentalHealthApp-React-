import React from 'react';
import backgroundphoto from './images/backgroundphoto.png';
import myImage from './images/campaign.jpg';


const LearnPage = () => {
    return(
        <>
            <div
                style={{ backgroundImage: `url(${backgroundphoto})` }}
                className="flex justify-center items-center w-full h-3/5 bg-no-repeat bg-cover bg-center ..."
            >
                <div className='w-full sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 h-full flex justify-center items-center flex-col content-center ring-4 bg-white opacity-75 rounded-lg px-1.5'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-1 w-full sm:w-4/5 text-center'>
                        Unveiling the Shades of Mind: A Journey Towards Mental Wellness
                         </h2>

                     <p className='text-sm sm:text-base md:text-lg xl:text-xl w-full sm:w-4/5 text-center text-slate-900 mt-3.5 mb-3.5'>
                     Your story is powerful. Your feelings are valid. And your mental health matters. Join our campaign today. Let's embark on this journey together, towards a future where mental wellness is embraced, celebrated, and prioritized.
                     </p>
                </div>

            </div>
            <div className='flex justify-center items-center flex-col xl:flex-row  w-full xl:h-2/5 h-96 gap-6 xl:visible invisible'>
                <div className='w-72 h-2/4 border border-emerald-300 bg-green-500 opacity-75 border-double text-center flex items-center justify-center text-white text-lg font-medium hover:bg-green-600 transition-colors duration-150 cursor-pointer'>
                    I'm feeling shame
                </div>
                <div className='w-72 h-2/4 border border-emerald-300 bg-red-400 opacity-75 border-double text-center flex items-center justify-center text-gray-950 text-lg font-medium hover:bg-red-500 transition-colors duration-150 cursor-pointer'>
                    Someone I know is struggling
                </div>
                <div className='w-72 h-2/4 border border-emerald-300 bg-sky-500 opacity-75 border-double text-center flex items-center justify-center text-white text-lg font-medium hover:bg-sky-600 transition-colors duration-150 cursor-pointer'>
                    What is shame?
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-3/4 '>
            <div className="flex flex-col xl:flex-row justify-around items-center w-full h-auto">

<div className='w-full xl:w-1/2 flex justify-center items-center flex-col p-4'>
    <h2 className='text-lg md:text-xl xl:text-2xl font-semibold'>What is the 'If it’s okay' campaign?</h2>
    <p className='text-sm md:text-base xl:text-lg mt-3 w-full md:w-4/5 lg:max-w-2xl'>
        The "If It’s Okay" campaign is a mental health initiative designed to address and reduce the stigma and discrimination associated with mental illness by tackling the negative impacts of shame. The campaign operates across the UK, including Scotland, Wales, Northern Ireland, and England, and focuses on giving a voice to individuals who have experienced shame due to their mental health conditions. It encourages society to acknowledge and accept that "it’s okay not to be okay," highlighting the reality that many people feel unable to share their mental health struggles due to fear of judgment, isolation, or discrimination. One key message of the campaign is the encouragement for everyone to reflect on their own attitudes and behaviors, to ensure they are not inadvertently contributing to the stigma or feelings of shame that individuals with mental health issues may experience. It also provides tips on how to start conversations with someone who might be struggling, how to promote self-compassion, and ways to support the campaign's goals of reducing stigma and discrimination.
    </p>
</div>

<div className='w-full xl:w-1/2 flex justify-center items-center p-4'>
    <img className='w-3/4 md:w-2/3 xl:w-1/2 h-auto' src={myImage} alt="Campaign Visual" />
</div>

</div>

</div>


        </>
    )
}
export default LearnPage;