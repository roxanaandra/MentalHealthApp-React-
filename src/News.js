import React, { useEffect, useState } from 'react';
import ViewArticles from './ViewArticles'; // Ensure this import matches the file path in your project

const News = () => {
    const [articlesNews, setArticlesNews] = useState({});

    useEffect(() => {
        
        const appData = JSON.parse(localStorage.getItem('appData')) || {};
        
        
        if (!appData.articles) {
            appData.articles = {
                1: {
                    title: "Healthy lifestyle",
                    content: "Here are the health-related magazine covers focusing on different aspects of well-being: yoga for mental and physical balance, nutrition with a colorful display of fruits and vegetables, and the benefits of outdoor activities like hiking. Each cover is designed to inspire and guide you towards a healthier lifestyle through engaging visuals and catchy headlines."
                },
                2: {
                    title: "New Therapy Techniques Show Promise for PTSD Treatment",
                    content: "Innovative therapy techniques are showing promising results in treating Post-Traumatic Stress Disorder (PTSD) among veterans and first responders. Techniques such as virtual reality exposure therapy and EMDR (Eye Movement Desensitization and Reprocessing) are offering new hope for those affected by PTSD, providing effective tools for managing symptoms and improving quality of life. These advances highlight the importance of continued research and investment in mental health technologies and therapies."
                },
                3: {
                    title: "Al Treilea Articol",
                    content: "Conținutul celui de-al treilea articol..."
                },
                4: {
                    title: "Al Patrulea Articol",
                    content: "Conținutul celui de-al patrulea articol..."
                },
                5: {
                    title: "Al Cincilea Articol",
                    content: "Conținutul celui de-al cincilea articol..."
                },
                6: {
                    title: "Al Șaselea Articol",
                    content: "Conținutul celui de-al șaselea articol..."
                },
                7: {
                    title: "Al Șaptelea Articol",
                    content: "Conținutul celui de-al șaptelea articol..."
                }
            };


            localStorage.setItem('appData', JSON.stringify(appData));
        }

        setArticlesNews(appData.articles);
    }, []);

    return (
        <>
            <ViewArticles articlesNews={articlesNews} />
        </>
    );
};

export default News;
