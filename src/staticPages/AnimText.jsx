import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";
import RedoAnimTextStatic from "./RedoAnimTextStatic";

// Exporting AnimText as default export
export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  const baseText = "Hi! I'm Cathy.";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    });
    return controls.stop;
  }, []);

  return (
    <span className="anim-text">
      <div className="title">
        <motion.span>{displayText}</motion.span>
    </div>
      {done && (
        <>
          <br /> <br />
        </>
      )}
      <div className="subhead">
      <RedoAnimTextStatic delay={delay + 1} />
        <RedoAnimText delay={delay + 1.5} />
        </div>
      <CursorBlinker />
    </span>
  );
}
