import { motion } from "framer-motion";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetail from "../components/events/DetailEvents";

const EventDetails = () => {
  const { id } = useParams();
  const items = useLoaderData();

  const item = items?.find((phone) => phone.id === parseInt(id));

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="my-16 max-w-6xl w-[93%] mx-auto"
    >
      <EventDetail item={item} />
    </motion.div>
  );
};

export default EventDetails;
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vh",
  },
  exit: {
    x: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,

      type: "spring",
    },
  },
};
