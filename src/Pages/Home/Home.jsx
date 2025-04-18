import React, { useState } from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import Phones from "../../Components/Phones";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhone = data.filter(
      (p) =>
        p.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        p.brand.toLowerCase().includes(text.toLowerCase())
    );
    setPhones(searchedPhone);
  };
  return (
    <div className="min-h-[calc(100vh-69px)]">
      <Banner handleSearch={handleSearch} />
      <Phones phones={phones} />
    </div>
  );
};

export default Home;
