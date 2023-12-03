/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import Autoplay from "./../../../node_modules/swiper/modules/autoplay.mjs";
import Navigation from "./../../../node_modules/swiper/modules/navigation.mjs";
import Pagination from "./../../../node_modules/swiper/modules/pagination.mjs";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Slider = ({ setActiveData, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const unfinishedEvents = items.filter((item) => !item.is_finished);

  const handleSlideChange = (swiper) => {
    setActiveData(unfinishedEvents[swiper.activeIndex]);
    setActiveIndex(swiper.activeIndex);
    // console.log(unfinishedEvents[swiper.activeIndex]);
    console.log(swiper.activeIndex);
  };

  useEffect(() => {
    // Add any additional logic you need when the active index changes.
  }, [activeIndex]);

  return (
    <div className="w-full h-fit mt-10 md:mt-0 md:h-full flex flex-col justify-center items-start gap-4 md:gap-6 ">
      <div className="flex justify-between w-full">
        <h3 className="md:text-3xl text-lg font-lilyOne ">
          Upcoming & Announced Events
        </h3>
        <div className="  text-black gap-3 hidden md:flex ">
          <Button
            variant="bordered"
            isIconOnly
            className="cursor-pointer rounded-full  p-1.5 swiper-button-prev"
          >
            <ChevronLeft />
          </Button>
          <Button
            isIconOnly
            variant="bordered"
            className="cursor-pointer rounded-full  p-1.5 swiper-button-next"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="w-full h-fit flex justify-center items-center">
        <Swiper
          // spaceBetween={20}
          // slidesPerView={2}
          speed={500}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            // loop: true,
          }}
        >
          {unfinishedEvents.map((item, index) => (
            <SwiperSlide key={Math.random() * index}>
              <Link to={`/event/${item.id}`}>
                <Card
                  className={`rounded-2xl  overflow-hidden col-span-2  w-full md:w-[370px] p-0 ${
                    activeIndex === index
                      ? " border-[#F9A51A] border-3"
                      : "border-none"
                  }`}
                >
                  <img
                    src={item?.image}
                    alt=""
                    // width={370}
                    // height={180}
                    className={`md:w-[370px] overflow-hidden w-full h-[160px]  md:h-[180px] `}
                  />
                </Card>
              </Link>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="hidden md:block"></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
