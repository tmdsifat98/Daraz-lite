import React, { useEffect, useState } from "react";
import { getFavorite, removeFavorite } from "../Utilities/utils";
import FavItem from "../Components/FavItem";
import Button from "../Utilities/Button";
import { Link } from "react-router";

const Favorites = () => {
  const [addPhone, setAddPhone] = useState([]);
  useEffect(() => {
    const favoritePhones = getFavorite();
    setAddPhone(favoritePhones);
  }, []);
  const handleRemove = (phone) => {
    removeFavorite(phone);
    setAddPhone(getFavorite());
  };
  if (addPhone.length == 0)
    return (
      <>
        <h1 className="text-7xl text-center mt-10">No items found</h1>
        <Link className="flex justify-center my-6" to="/">
          <Button label="Browse Phones" />
        </Link>
      </>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 my-10 mx-auto">
      {addPhone.map((phone) => (
        <FavItem
          key={phone.id}
          phone={phone}
          handleRemove={()=>handleRemove(phone)}
        ></FavItem>
      ))}
    </div>
  );
};

export default Favorites;
