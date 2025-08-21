import React from 'react'

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-spin animation-delay-75"></div>
      </div>
      <p className="text-white/80 mt-4 text-lg font-medium animate-pulse">
        ✨ Loading amazing GIF...
      </p>
    </div>
  )
}

export default Spinner
