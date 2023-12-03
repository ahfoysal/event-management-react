import { useLoaderData } from "react-router-dom";
import EventContainer from "../components/events/EventContainer";
import EventsBanner from "../components/events/EventsBanner";
import { motion } from "framer-motion";

const Events = () => {
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
        title={"All Events"}
        description=" Get all the updates of our previous and current events to stay
          connected. Upcoming events will be showcased here."
      />
      <EventContainer items={items} />
    </motion.div>
  );
};

export default Events;
const containerVariants = {
  hidden: {
    x: "100vh",
  },
  exit: {
    x: "-100vh",
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
