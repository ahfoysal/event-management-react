import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const EventPromo = () => {
  return (
    <div className="h-[364px] bg-[url('/promo.png')] bg-no-repeat bg-cover">
      <div className="container mx-auto flex flex-col justify-center  items-center h-full  ">
        <h1 className="text-primary text-center text-xl text-white md:text-2xl relative font-medium after:content-[''] after:absolute after:ml-auto after:rounded-md after:left-[calc(50%-40px)] after:-bottom-2.5 after:w-12 after:bg-[#00999a]  after:h-[3px]">
          CONCERT OR EVENT PROMOTER?
        </h1>
        <h2 className="my-8  text-2xl md:text-4xl w-full text-white md:w-[60%] text-center">
          Sell and publicise your event here to millions of potential customers
          today...
        </h2>
        <Button
          color="primary"
          radius="full"
          endContent={
            <ArrowRight
              size={16}
              className={
                "group-data-[hover=true]:translate-x-0.5 outline-none transition-transform "
              }
            />
          }
          className="group py-3 px-4     font-bold"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default EventPromo;
