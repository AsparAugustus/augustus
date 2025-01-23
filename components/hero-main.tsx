"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroMain() {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16 overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <Image
            src="/backgrounds/pixel-background.gif"
            alt="Meme Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative backdrop-blur-sm bg-gray-700 bg-opacity-10">
        <div className="max-w-2xl ml-0 md:ml-8 space-y-8 backdrop-blur-sm bg-gray-700 bg-opacity-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Your Meme Game is Our Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-white max-w-xl"
          >
            We turn viral moments into viral movements. Professional community management with a side of dank memes.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

