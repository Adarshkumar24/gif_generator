import Spinner from './Spinner';
import React, { useState } from 'react'
import useGif from '../hooks/useGif'

const Tag = () => {
    const [tag, settag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);
    
  return (
    <div className='w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl
    flex flex-col items-center p-10 hover:transform hover:scale-105 transition-all duration-300 mx-auto'>
       
       <h2 className='text-4xl font-bold text-white mb-8 flex items-center gap-3'>
         🏷️ {tag || 'Tagged'} GIF
       </h2>

       <div className='bg-white/10 rounded-2xl p-6 mb-8 w-full h-96 flex items-center justify-center'>
         {
           loading ? (
             <Spinner/>
           ) : (
             <img 
               src={gif} 
               alt={`${tag} GIF`}
               className="max-w-full max-h-full rounded-xl shadow-lg object-contain"
             />
           )
         }
       </div>

       <input 
         className='w-full text-xl py-5 px-8 rounded-2xl mb-6 text-center
                   bg-white/20 backdrop-blur-sm border border-white/30
                   text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50
                   transition-all duration-200'
         onChange={(event)=> settag(event.target.value)}
         value={tag}
         placeholder='🔍 Enter a tag (e.g., cats, funny, dance)...'
       />

       <button 
         onClick={() => fetchData(tag)}
         disabled={loading}
         className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 
                   text-white font-bold text-xl py-5 px-10 rounded-2xl 
                   transform hover:scale-105 transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                   shadow-lg hover:shadow-xl">
         {loading ? 'Searching...' : `🎨 Generate ${tag || 'Tagged'} GIF`}
       </button>
    </div>
  )
}

export default Tag
