import React from "react";
import { getFavorite } from "../Utilities/utils";
import FavItem from "../Components/FavItem";

const Favorites = () => {
  const favoritePhones = getFavorite();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-3/4 my-10 mx-auto">
      {favoritePhones.map((phone) => (
        <FavItem key={phone.id} phone={phone}></FavItem>
      ))}
    </div>
  );
};

export default Favorites;
