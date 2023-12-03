import { useLoaderData } from "react-router-dom";
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import EventPromo from "../components/home/EventPromo";
import UpcomingEvents from "../components/home/UpcomingEvents";
import { useEffect, useState } from "react";
import Services from "../components/home/Services";

const Home = () => {
  const items = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("events.json");
        const data = await response.json(); // Parse JSON from the response body

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <Hero items={items}></Hero>

      <Services items={data} />
      <EventPromo />
      <UpcomingEvents items={items} />
    </div>
  );
};

export default Home;
