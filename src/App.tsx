import { useCallback, useEffect, useState } from 'react'

function App() {
  const [screenViewport, setScreenViewport] = useState({ w: 0, h: 0 })
  const [windowViewport, setWindowViewport] = useState({ w: 0, h: 0 })

  const getViewport = useCallback(() => {
    if (screen) {
      setScreenViewport({
        w: screen.width,
        h: screen.height
      })
    }

    if (window) {
      setWindowViewport({
        w: window.innerWidth,
        h: window.innerHeight
      })
    }
  },[])

  useEffect(() => {
    getViewport()
    
    if (window) {
      window.addEventListener('resize', getViewport)
    }

    if (screen.orientation) { // Property doesn't exist on screen in IE11   
      screen.orientation.addEventListener("change", getViewport);
    }
  }, [])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div 
        className='
          text-3xl md:text-4xl lg:text-5xl font-bold
          bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text
        '
      >
        {screenViewport.w} x {screenViewport.h}
      </div>

      <div className="mt-6 md:mt-8 lg:mt-10 border border-gray-300 flex flex-col justify-center text-center p-4">
        <span className='md:text-lg lg:text-xl'>Current Screen Size</span>
        <div className='mt-2 font-bold text-lg md:text-xl lg:text-2xl'>
          {windowViewport.w} x {windowViewport.h}
        </div>
      </div>
    </div>
  )
}

export default App
