"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
    { name: "Merlin", role: "Founder & CEO", pictureUrl: "avatars/Merlin.jpg" },
    { name: "Mogul", role: "Creative Director", pictureUrl: "avatars/Mogul.jpg" },
    { name: "Lzg", role: "Lead Developer", pictureUrl: "avatars/lzg.jpg" },
    { name: "Rain", role: "Community Manager", pictureUrl: null },
    { name: "Charm", role: "Community Manager", pictureUrl: null },
    { name: "wx9", role: "Community Manager", pictureUrl: null },
    { name: "Graven", role: "Community Manager", pictureUrl: null },
    { name: "Web3 wifey", role: "Community Manager", pictureUrl: null },
]

export function Team() {
    return (
        <section className="min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Meet the Team
                </motion.h2>

                <div className="relative">
                    <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
                        <button className="p-2 rounded-full bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
                        <button className="p-2 rounded-full bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 flex flex-col items-center justify-center space-y-4">
                                    {member.pictureUrl ? (
                                        <img src={member.pictureUrl} alt={member.name} className="rounded-full w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full space-y-2">
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="h-0.5 bg-cyan-300/30 rounded-full"
                                                    style={{ width: `${Math.random() * 50 + 50}%` }}
                                                    animate={{
                                                        width: ["100%", `${Math.random() * 50 + 50}%`],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        repeatType: "reverse",
                                                        delay: i * 0.1,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
