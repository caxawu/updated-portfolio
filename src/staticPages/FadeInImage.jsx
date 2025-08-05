import { useState } from "react";
import { motion } from "framer-motion";

const FadeInImage = (props) => {
  const {
    className,
    src,
    alt,
    delay = 0,
    animatetransform = true, // this is now local only
    ...rest
  } = props;

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
          animatetransform
            ? { opacity: 0, y: 25 }
            : { opacity: 0 }
        }
        animate={
          animatetransform
            ? { opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }
            : { opacity: loaded ? 1 : 0 }
        }
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: loaded ? delay : 0,
        }}
        {...rest} // ✅ clean — doesn't include animatetransform
      />
    </>
  );
};



export default FadeInImage;
