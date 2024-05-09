import React from 'react';

const ViewArticles = ({ articlesNews }) => { 
    const articlesArray = Object.keys(articlesNews).map((key) => ({ 
        id: key,
        ...articlesNews[key]
    }));

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className='text-4xl font-extrabold text-center text-gray-900 mb-14'>Articles</h2>
            
            <div className='max-w-4xl space-y-16' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                {articlesArray.map((article) => (
                    <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out' key={article.id} style={{ width: '100%', margin: '10px', backgroundColor: '#f9fafb' }}>
                        <h3 className='text-2xl font-bold text-gray-800 mb-3'>{article.title}</h3>
                        <p className='text-gray-600'>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewArticles;
