// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Helper: shuffle unrevealed chars
  const shuffleText = (original, revealed) => {
    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(original.split(""))).filter((char) => char !== " ")
      : characters.split("");
    return original
      .split("")
      .map((char, idx) => {
        if (char === " " || revealed.has(idx)) return original[idx];
        return availableChars[Math.floor(Math.random() * availableChars.length)];
      })
      .join("");
  };

  // Main Animation Effect
  useEffect(() => {
    let interval;
    let iteration = 0;
    let localRevealed = new Set(revealedIndices);

    if (isHovering) {
      setIsScrambling(true);
      if (sequential) {
        interval = setInterval(() => {
          let nextIdx;
          if (revealDirection === "start") {
            nextIdx = localRevealed.size;
          } else if (revealDirection === "end") {
            nextIdx = text.length - 1 - localRevealed.size;
          } else {
            // Center or fallback to start
            nextIdx = localRevealed.size;
          }
          localRevealed.add(nextIdx);
          setRevealedIndices(new Set(localRevealed));
          setDisplayText(shuffleText(text, localRevealed));
          if (localRevealed.size >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
              setDisplayText(text);
              setIsScrambling(false);
            }, speed);
          }
        }, speed);
      } else {
        interval = setInterval(() => {
          setDisplayText(shuffleText(text, new Set()));
          iteration++;
          if (iteration >= maxIterations) {
            clearInterval(interval);
            setDisplayText(text);
            setIsScrambling(false);
          }
        }, speed);
      }
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);

  // Animate on view effect
  useEffect(() => {
    if (animateOn !== "view") return;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };
    const observer = new window.IntersectionObserver(observerCallback, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, idx) => {
          const isRevealed =
            revealedIndices.has(idx) || !isScrambling || !isHovering;
          return (
            <span
              key={idx}
              className={isRevealed ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}