"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroProject() {
  return (
    <section className="min-h-screen bg-background py-16 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rotate-45 transform -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rotate-45 transform translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
            >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-md rounded-2xl opacity-30" />
            <Image
              src="/chart-table.jpg"
              alt="Telegram App"
              width={400}
              height={400}
              className="relative rounded-2xl shadow-2xl mx-auto overflow-hidden object-cover"
            />
            </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              WE'RE ALWAYS ON THE LOOKOUT FOR <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">ANOTHER EXCITING PROJECT.</span>
            </h2>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
              Traditional marketing agencies avoid meme projects due to the risk to KOL reputations.
              </p>
              <p>
              At Augustus, we offer custom community management and creative strategies to help cryptocurrency projects succeed. Our "replyguy" approach drives engagement and builds active, thriving communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

