// import { Spinner } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoaderScreen = () => {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 100 : v + 5));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariant}
      className="container mx-auto h-screen flex flex-col justify-center items-center gap-3"
    >
      {/* <Spinner color="#FFB457" /> */}

      <motion.h1
        initial="hidden"
        animate="visible"
        // variants={logoVariant}
        className=" animate-text bg-gradient-to-r  via-red-500 font-black inline  from-[#FF705B] to-[#FFB457] text-4xl bg-clip-text text-transparent  font-lilita"
      >
        Eventify
      </motion.h1>
      <Progress
        aria-label="Downloading..."
        size="sm"
        value={value}
        color="#FFB457"
        showValueLabel={true}
        className="max-w-sm"
      />
    </motion.div>
  );
};

export default LoaderScreen;

// const logoVariant = {
//   hidden: {
//     x: 100,
//   },
//   visible: {
//     x: 0,
//     transition: {
//       duration: 1,
//       type: "spring",
//       stiffness: 80,
//     },
//   },
// };
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  exit: {
    x: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
};
