import Spinner from './Spinner';
import React from 'react'
import useGif from '../hooks/useGif'

const Random = () => {
    const {gif, loading, fetchData} = useGif();
    
  return (
    <div className='w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl
    flex flex-col items-center p-10 hover:transform hover:scale-105 transition-all duration-300 mx-auto'>
       
       <h2 className='text-4xl font-bold text-white mb-8 flex items-center gap-3'>
         🎲 Random GIF
       </h2>

       <div className='bg-white/10 rounded-2xl p-6 mb-8 w-full h-96 flex items-center justify-center'>
         {
           loading ? (
             <Spinner/>
           ) : (
             <img 
               src={gif} 
               alt="Random GIF"
               className="max-w-full max-h-full rounded-xl shadow-lg object-contain"
             />
           )
         }
       </div>

       <button 
         onClick={() => fetchData()}
         disabled={loading}
         className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 
                   text-white font-bold text-xl py-5 px-10 rounded-2xl 
                   transform hover:scale-105 transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                   shadow-lg hover:shadow-xl">
         {loading ? 'Generating...' : '🎯 Generate Random GIF'}
       </button>
    </div>
  )
}

export default Random
