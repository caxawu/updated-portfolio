import { useState } from "react";
import { motion } from "framer-motion";

const FadeInImage = ({ className, src, alt, delay = 0 }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={`${className} fade-loader`} />
      )}
      <motion.img
        className={`${className} fade-image ${loaded ? "loaded" : "loading"}`}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="eager"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: loaded ? delay : 0,
        }}
      />
    </>
  );
};

export default FadeInImage;
