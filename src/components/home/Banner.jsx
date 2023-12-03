/* eslint-disable react/prop-types */

import { Button } from "@nextui-org/button";

import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
// import { Link, useNavigate } from "react-router-dom";

export default function Banner() {
  // const navigate = useNavigate();

  return (
    <div
      className="  dark:backdrop-brightness-50 mt-16 md:mt-0    bg-[url('https://chatcord.pewds.vercel.app/images/pattern.png')]   "
      //   style={containerStyle}
    >
      <div className=" md:pt-32 pt-0 pb-8 md:pb-0 md:pb-12 pb-0 gap-6 justify-center items-center container mx-auto flex    flex-col-reverse md:flex-row    ">
        <div className="md:w-1/2  w-full flex items-center text-center md:text-left">
          <div className="w-[90%] flex flex-col mx-auto overflow-hidden">
            <h1 className="  text-3xl md:text-5xl  line-clamp-2 inline font-normal from-[#d4cbca] to-[#FFB457]  bg-clip-text text-transparent bg-gradient-to-b font-lilita">
              Eventify
            </h1>
            <TypeAnimation
              sequence={[
                "Amplifying theater and performing arts magic",
                1000,
                "Showcasing premiere-worthy film screenings",
                1000,
                "Curating laughter with top-notch comedy events",
                1000,
                "Elevating sports events with seamless management",
                1000,
                "Eventify - Your partner management partner.",
              ]}
              speed={40}
              style={{
                fontSize: "19px",

                color: "#FF705B",

                fontWeight: 500,
              }}
              repeat={Infinity}
            />
            <h1 className="text-sm text-muted-foreground mt-2 font-normal line-clamp-4">
              Welcome to Eventify, your go-to for seamless event management.
              Dive into meticulously planned concerts, sports festivals, and
              more. Crafted for unforgettable experiences and flawless
              execution, our events ensure every detail is thoughtfully curated
              for your enjoyment.
            </h1>
            <a href="#services">
              <Button
                color="primary"
                to={"/events"}
                radius="full"
                // onClick={() => navigate("/events/")}

                endContent={
                  <ArrowRight
                    size={16}
                    className={
                      "group-data-[hover=true]:translate-x-0.5 outline-none transition-transform "
                    }
                  />
                }
                className="group py-3 px-4 mt-6     font-bold"
              >
                See Our Services
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full  relative">
          <div className="container mx-auto flex justify-center items-center h-full">
            <div className="row">
              <div className="relative  gallery flex gap-4 rounded-lg overflow-hidden ">
                <div className="rounded-xl screen h-[400px] w-[90px] md:h-[450px] md:w-[180px] overflow-hidden block relative mx-0 my-auto ">
                  <img
                    src="https://i.imgur.com/bK20hEY.png"
                    alt=""
                    className="screenImg rounded-lg w-full  z-0 absolute m-0 p-0 bottom-0 h-auto"
                  />
                </div>
                <div className="rounded-xl screen h-[400px] w-[90px] md:h-[450px] md:w-[180px] overflow-hidden block relative mx-0 my-auto ">
                  <img
                    src="https://i.imgur.com/XnuZyJ1.png"
                    alt=""
                    className=" screenTwo rounded-lg w-full z-0 absolute m-0 p-0 bottom-0 h-auto"
                  />
                </div>
                <div className=" rounded-xl screen h-[400px] w-[90px] md:h-[450px] md:w-[180px] overflow-hidden block relative mx-0 my-auto ">
                  <img
                    src="https://i.imgur.com/6aAFTIO.png"
                    alt=""
                    className="screenThree rounded-lg w-full z-0 absolute m-0 p-0 bottom-0 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
