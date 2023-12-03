/* eslint-disable react/prop-types */

import { Tabs, Tab } from "@nextui-org/react";
import RowCard from "../Shared/Card";

export default function EventContainer({ items }) {
  return (
    <div className="mt-12 flex w-full flex-col max-w-6xl mx-auto justify-center items-center">
      <Tabs aria-label="Options">
        <Tab key="all" title="All">
          <div className="max-w-6xl w-[93%] mx-auto flex flex-wrap mt-8 md:mt-16 gap-6  justify-center ">
            {items.map((item, index) => (
              <RowCard key={index} item={item} />
            ))}
          </div>
        </Tab>
        <Tab key="upcoming" title="Upcoming">
          <div className="max-w-6xl mx-auto flex flex-wrap mt-16 gap-6  i  justify-center ">
            {items.map(
              (item, index) =>
                !item.is_finished && <RowCard key={index} item={item} />
            )}
          </div>
        </Tab>
        <Tab key="done" title="Done">
          <div className="max-w-6xl mx-auto flex flex-wrap mt-16 gap-6  i  justify-center ">
            {items.map(
              (item, index) =>
                item.is_finished && <RowCard key={index} item={item} />
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
