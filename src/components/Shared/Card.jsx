/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@nextui-org/react";
import {
  Calendar,
  LocateIcon,
  SendHorizonalIcon,
  TicketIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RowCard = ({ item, showButton }) => {
  return (
    <Link
      to={`/event/${item.id}`}
      className="w-full md:w-[calc(50%-40px)] self-center place-self-center place-content-center"
    >
      <Card className="text-center  py-3   ">
        <CardHeader>
          <CardTitle>
            <span className="text-lg md:text-xl  line-clamp-1 relative before:content-[''] before:absolute before:ml-auto before:rounded-md before:left-[calc(50%-40px)] before:-top-4 before:w-28 before:bg-foreground-900  before:h-[1.5px]">
              {item.name}
            </span>
          </CardTitle>
          <div className="flex flex-col md:flex-row items-center my-4 justify-center gap-0 md:gap-4 text-sm">
            <div className="mt-4 flex items-center gap-1 ">
              <Calendar size={14} />
              {item.time}
            </div>
            <div className="mt-4 flex items-center gap-1">
              <LocateIcon size={14} /> {item.location}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="relative home-card  rounded-md overflow-hidden group">
            <motion.img
              src={item.image}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                delay: 0.1,
              }}
              className="w-full h-[200px] md:h-[230px]  rounded-md overflow-hidden  group-hover:transform  group-hover:transition-all group-hover:duration-300 group-hover:ease-linear  "
              alt=""
            />
            <div className="absolute top-3 left-3  text-sm bg-background/80 px-2 py-1 rounded-full">
              <p> ৳ {item.price}</p>
            </div>
            <div className="absolute  pointer-events-none  bottom-2 left-2 right-2 hidden select-none group-hover:block  text-sm bg-background/80 px-2 py-1 rounded-lg">
              <p className="line-clamp-2"> {item.description}</p>
            </div>
          </div>
        </CardContent>
        {showButton !== false && (
          <CardFooter className="flex justify-center">
            <Button
              color="primary"
              radius="full"
              className="font-bold pointer-events-none text-xs   md:text-sm "
              // as={Link}
              // to={}
              // onClick={() => navigate(`/event/${item.id}`)}
              endContent={
                !item.is_finished ? (
                  <TicketIcon
                    size={16}
                    className={
                      "group-data-[hover=true]:translate-x-0.5 outline-none  transition-transform "
                    }
                  />
                ) : (
                  <SendHorizonalIcon
                    size={16}
                    className={
                      "group-data-[hover=true]:translate-x-0.5 outline-none transition-transform "
                    }
                  />
                )
              }
            >
              {!item.is_finished ? "Buy Ticket" : "View Event"}
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
};

export default RowCard;
