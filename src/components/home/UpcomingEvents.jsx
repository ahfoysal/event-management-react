/* eslint-disable react/prop-types */

import RowCard from "../Shared/Card";

const UpcomingEvents = ({ items }) => {
  return (
    <div className="bg-foreground-50/25  w-full flex flex-col items-center py-10  ">
      <h1 className=" text-center inline font-normal from-[#FF705B] to-[#FFB457] text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b font-lilita">
        Upcoming Events
      </h1>
      <div className="max-w-6xl w-[93%] mx-auto flex  flex-wrap mt-8 md:mt-16 gap-6  items-start place-items-center justify-center content-center justify-items-center row-auto ">
        {items.map(
          (item, index) =>
            !item.is_finished && <RowCard key={index} item={item} />
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
