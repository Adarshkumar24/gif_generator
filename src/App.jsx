import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {
  // Debug: Check if components are loading
  console.log('App component loaded');
  console.log('API Key available:', !!process.env.REACT_APP_GIPHY_API_KEY);
  
  return (
  <div className='min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-7xl font-extrabold text-white mb-6 drop-shadow-2xl'>
            🎬 GIF Generator
          </h1>
          <p className='text-2xl text-white/90 font-medium'>
            Generate amazing GIFs instantly with GIPHY API
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 w-full place-items-center" >
          <Random />
          <Tag/>
        </div>
      </div>
  </div>);
}
