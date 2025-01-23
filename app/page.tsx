"use client";

import { useState, useEffect } from "react";
import { HeroMain } from "@/components/hero-main";
import { HeroProject } from "@/components/hero-project";
import { HeroCalendly } from "@/components/hero-calendly";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";
import { Loading } from "@/components/loading"; // Import the Loading component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Use the Loading component
  }

  return (
    <main>
      <HeroMain />
      <HeroProject />
      <HeroCalendly />
      <Team />
      <Footer />
    </main>
  );
}
