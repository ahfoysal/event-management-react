import { useLoaderData, useParams } from "react-router-dom";
import { CardsPaymentMethod } from "../components/checkout/PaymentCard";
import RowCard from "../components/Shared/Card";
import Policy from "../components/checkout/Policy";
import { motion } from "framer-motion";

const Checkout = () => {
  const { id } = useParams();
  const items = useLoaderData();

  const item = items?.find((phone) => phone.id === parseInt(id));

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="my-16 max-w-5xl w-[93%] mx-auto"
    >
      <div className="py-8">
        <Policy />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <CardsPaymentMethod />
        </div>
        <div>
          <RowCard item={item} showButton={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vh",
  },
  exit: {
    x: "-100vh",
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
