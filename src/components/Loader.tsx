import { motion } from 'motion/react'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[100]"
      initial={{ y: 0 }}
      animate={{ y: '100%' }}
      transition={{
        duration: 1.2,
        delay: 2,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-black"
        style={{  fontSize: '1.8rem', fontWeight: 600 }}
      >
        Synapse.
      </motion.h1>
    </motion.div>
  )
}