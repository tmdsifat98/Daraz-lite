import React, { useEffect, useState } from "react";
import { getFavorite, removeFavorite } from "../Utilities/utils";
import FavItem from "../Components/FavItem";

const Favorites = () => {
  const [addPhone, setAddPhone] = useState([]);
  useEffect(() => {
    const favoritePhones = getFavorite();
    setAddPhone(favoritePhones);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    setAddPhone(getFavorite())
  };
  if(addPhone.length==0) return <h1 className="text-7xl text-center my-10">No items found</h1>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 my-10 mx-auto">
      
      {addPhone.map((phone) => (
        <FavItem key={phone.id} phone={phone} handleRemove={handleRemove}></FavItem>
      ))}
    </div>
  );
};

export default Favorites;
