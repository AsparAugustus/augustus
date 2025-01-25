"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { Send, MessageSquare } from "lucide-react";

export function HeroCalendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact" className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
              BOOK A FREE CONSULTATION
              </span>{" "}
              <span className="block mt-2">AND DISCOVER OUR EDGE</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Book a call now via Calendly with our Founder
              </p>
              <ul className="space-y-2">
                <li>– Select day & time</li>
                <li>
                  – Enter your name, email and everything that will help prepare
                  for our meeting
                </li>
                <li>– Schedule the event</li>
                {/* <li>– Keep up to date with the latest from Augustus via our</li> */}
              </ul>
              {/* <div className="flex gap-4 pt-2">
                <Link
                  href="/telegram"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Telegram group
                </Link> */}
                {/* <span>or</span> */}
                {/* <Link
                  href="/discord"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Discord Server
                </Link> */}
              {/* </div> */}
            </div>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card overflow-hidden justify-center flex items-center"
            style={{ maxWidth: "500px", maxHeight: "900px", margin: "0 auto", padding: "1" }}
            >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/speaktomerlin/30min"
              style={{ minWidth: "420px", height: "800px" }}
            />
            </motion.div>
        </div>
      </div>
    </div>
  );
}
