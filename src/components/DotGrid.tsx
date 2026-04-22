import { motion } from 'motion/react'

const GRID_SIZE = 3
const dots = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i)

export default function DotGrid({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gap: '2px',
        width: '14px',
        height: '14px',
      }}
    >
      {dots.map((i) => (
        <motion.div
          key={i}
          animate={{
            backgroundColor: hovered ? '#0a0a0a' : '#d4d4d4',
          }}
          transition={{
            duration: 0.15,
            delay: i * 0.03,
          }}
          style={{
            width: '2px',
            height: '2px',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  )
}