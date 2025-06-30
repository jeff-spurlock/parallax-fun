import React from 'react'
import { useParallax } from 'react-scroll-parallax'

function App() {
  const items = Array.from({ length: 300 }).map(() => {
    const x = Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 100)
    const z = Math.floor(Math.random() * 6)
    return { x, y, z }
  })

  return (
    <div className="w-screen h-[300vh] bg-gray-900 relative">
      <h1 className="text-white text-2xl p-4">Test</h1>
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <Dot key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

const Dot = ({ x, y, z }: { x: number, y: number, z: number }) => {
  const parallax = useParallax({ speed: (z * 10)})
  return (
    <div
      ref={parallax.ref as React.Ref<HTMLDivElement>}
      className="w-4 h-4 rounded-full bg-red-500 absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        scale: `${z * 20 + 75}%`
      }}
    />
  )
}

export default App
