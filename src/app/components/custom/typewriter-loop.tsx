"use client";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterLoop() {
  // Array of phrases to be displayed
  const phrases = [
    "Full Stack Developer",
    "Ex-SD Intern at Fidelity International",
    "React.js Enthusiast",
    "Next.js Enthusiast",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Set up the interval to switch to the next phrase
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000); // Change phrase every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array - only run once on mount

  const currentPhrase = phrases[phraseIndex];
  const words = [{
    text: currentPhrase,
    className: "text-target"
  }];

  return (
    <TypewriterEffectSmooth
      key={phraseIndex} // Crucial for re-triggering the animation
      words={words}
      cursorClassName="bg-target"
    />
  );
}
