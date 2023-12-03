import { useLoaderData } from "react-router-dom";
import EventsBanner from "../components/events/EventsBanner";
import { motion } from "framer-motion";
import ServicesContainer from "../components/service/ServiceContainer";

const Services = () => {
  const items = useLoaderData();

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="my-16"
    >
      <EventsBanner
        title={"All Services"}
        description="Explore our diverse range of services. Stay connected for updates on current and upcoming offerings."
      />
      <ServicesContainer items={items} />
    </motion.div>
  );
};

export default Services;
const containerVariants = {
  hidden: {
    x: "-100vh",
  },
  exit: {
    x: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,

      type: "spring",
    },
  },
};
