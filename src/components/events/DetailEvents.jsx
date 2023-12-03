/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import {
  Calendar,
  LocateIcon,
  SendHorizonalIcon,
  TicketIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
const EventDetail = ({ item }) => {
  return (
    <div>
      <div className="md:pt-16 pt-8   ">
        <h1 className="text-primary text-center text-2xl md:text-4xl relative font-medium after:content-[''] after:absolute after:ml-auto after:rounded-md after:left-[calc(50%-40px)] after:-bottom-3 after:w-20 after:bg-[#00999a]  after:h-[3px]">
          {item.name}
        </h1>
        <img
          src={item.image}
          className="mt-12 w-full h-full rounded-md max-h-[500px]"
          alt=""
        />
        <h2 className="my-4 text-sm md:text-base text-muted-foreground ">
          {item.description}
        </h2>
      </div>
      {item?.attractions && (
        <div className="mt-8   ">
          <h2 className="text-lg">Event attractions:</h2>
          <ul className="flex flex-wrap gap-x-6">
            {item?.attractions.map((event) => (
              <li
                className="relative text-sm md:text-base text-muted-foreground
                 after:content-[''] after:absolute after:ml-auto after:rounded-md after:-right-3 after:top-2
                 after:w-[1px] after:bg-[#00999a]  after:h-[14px]"
                key={event}
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="my-16  flex justify-center items-center ">
        {!item.is_finished ? (
          <Button
            // color="primary"
            radius="full"
            as={Link}
            to={`/checkout/${item.id}`}
            className="font-semibold bg-[#FF705B] text-secondary"
            endContent={
              !item.is_finished ? (
                <TicketIcon
                  size={16}
                  className={
                    "group-data-[hover=true]:translate-x-0.5 outline-none transition-transform "
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
            Buy Ticket Now!
          </Button>
        ) : (
          <h2 className="text-xl">The event has ended.</h2>
        )}
      </div>
      <div className="  flex justify-between items-center gap-6 ">
        <Card className="text-center pt-8 w-full">
          <CardContent className="flex flex-col items-center  text-sm md:text-lg justify-center gap-4   ">
            <Calendar size={48} />
            <span className="line-clamp-2 break-all">{item.time}</span>
          </CardContent>
        </Card>
        <Card className="text-center pt-8 w-full  ">
          <CardContent className="flex flex-col items-center justify-center gap-4 text-sm ">
            <LocateIcon size={48} />
            <span className="line-clamp-2 break-all"> {item.location}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventDetail;
