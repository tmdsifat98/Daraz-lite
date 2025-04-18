import React, { useState } from "react";
import BannerImg from "../assets/banner.png";
import Button from "../Utilities/Button";
const Banner = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <img className="w-[550px] mx-auto mt-10" src={BannerImg} alt="" />
      <h1 className="text-7xl font-thin text-center">
        Browse, Search, View, Buy
      </h1>
      <p className="text-center mx-auto mt-4 text-gray-500 w-4/5 lg:w-1/3">
        Best place to browse, search, view details and purchase of top flagship
        phones of the current time - FlagshipFaceOff
      </p>

      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          setSearchText("");
        }}
        className="flex justify-center gap-1 items-center my-4"
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search phone by name or brand name"
          className="lg:w-1/3 border focus:outline-none text-lg px-5 text-gray-600 border-gray-200 py-3 rounded"
          type="text"
        />
        <Button type="submit" label="Search" />
      </form>
    </div>
  );
};

export default Banner;
