import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import { cn } from './lib/utils'

function App() {
  const items = Array.from({ length: 300 }).map(() => {
    const x = Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 100)
    const z = Math.floor(Math.random() * 6)
    return { x, y, z }
  })

  return (
    <>
      <div className="w-screen h-[300vh] bg-gray-900 relative">
        <h1 className="text-white text-2xl p-4">Test</h1>
        <div className="relative w-full h-full">
          {items.map((item, index) => (
            <Dot key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="w-screen h-[100vh] bg-gray-900" />
    </>
  )
}

const Dot = ({ x, y, z }: { x: number, y: number, z: number }) => {
  const parallax = useParallax({ speed: (z * 10)})
  return (
    <div
      ref={parallax.ref as React.Ref<HTMLDivElement>}
      className={cn("w-2 h-2 rounded-full absolute", z === 0 ? "bg-slate-200/50" : z === 1 ? "bg-slate-200/60" : z === 2 ? "bg-slate-200/70" : z === 3 ? "bg-slate-200/80" : z === 4 ? "bg-slate-200/90" : "bg-slate-200")}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        scale: `${z * 20 + 75}%`
      }}
    />
  )
}

export default App
