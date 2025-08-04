import { useState } from "react";
import { motion } from "framer-motion";

const FadeInImage = ({
  className,
  src,
  alt,
  delay = 0,
  animateTransform = true,
  ...rest // 👈 this will catch onClick, style, etc.
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className={`${className} fade-loader`} />}
      <motion.img
        className={`${className} fade-image ${loaded ? "loaded" : "loading"}`}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="eager"
        initial={
          animateTransform
            ? { opacity: 0, y: 25 }
            : { opacity: 0 }
        }
        animate={
          animateTransform
            ? { opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }
            : { opacity: loaded ? 1 : 0 }
        }
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: loaded ? delay : 0,
        }}
        {...rest} // 👈 this spreads the rest of the props (onClick, style, etc.)
      />
    </>
  );
};


export default FadeInImage;
