import React from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import Phones from "../../Components/Phones";

const Home = () => {
  const data = useLoaderData()
  return (
    <div className="min-h-[calc(100vh-69px)]">
      <Banner/>
      <Phones data={data}/>
    </div>
  );
};

export default Home;
