import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Protocol from '@/pages/Protocol'
import Docs from '@/pages/Docs'

function App() {
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    if (!loaderDone) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [loaderDone])

  return (
    <BrowserRouter>
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
      
      <div style={!loaderDone ? {
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
      } : {}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App