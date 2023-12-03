/* eslint-disable react/prop-types */
const EventsBanner = ({ title, description }) => {
  return (
    <div className="h-[200px] md:h-[250px] bg-[url('/promo.png')] bg-no-repeat bg-cover">
      <div className="container mx-auto flex flex-col justify-center items-center h-full  ">
        <h1 className="text-primary text-white text-2xl relative font-medium after:content-[''] after:absolute after:ml-auto after:rounded-md after:left-[calc(50%-40px)] after:-bottom-2.5 after:w-12 after:bg-[#00999a]  after:h-[3px]">
          {title}
        </h1>
        <h2 className="my-8 text-1xl text-white w-full  md:w-[40%] text-center">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default EventsBanner;
