import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Button from "../Utilities/Button";
import { FaArrowLeft, FaCartArrowDown } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { getCart, setCart, setFavorite } from "../Utilities/utils";
import { CartContext } from "../Providers/Context";

const PhoneDetails = () => {
  const { setAddCart } = useContext(CartContext);
  const { phoneId } = useParams();
  const phones = useLoaderData();
  const singlePhone = phones.find((phone) => phone.id === parseInt(phoneId));
  const {
    name,
    image,
    description,
    camera_info,
    price,
    model,
    brand,
    storage,
  } = singlePhone;

  const handleFavorite = () => {
    setFavorite(singlePhone);
  };
  const handleCart = (singlePhone) => {
    setCart(singlePhone);
    setAddCart(getCart());
  };
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img
        className="w-[650px] object-center my-6 mx-auto"
        src={image}
        alt=""
      />
      <button
        onClick={() => navigate(-1)}
        className="absolute top-0 left-72 bg-gray-100 p-2 rounded-full hover:bg-gray-300 cursor-pointer "
      >
        <FaArrowLeft />
      </button>
      <div className=" w-2/3 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-thin my-5 w-2/3">{name}</h1>
          <span className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Button
              onClick={() => handleCart(singlePhone)}
              label={<FaCartArrowDown />}
            />
            <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
          </span>
        </div>
        <p className="text-4xl font-thin my-5">Details:</p>
        <div>
          <div className="flex items-center gap-2 justify-start">
            <p className="font-bold">Brand:</p>
            <p>{brand}</p>
          </div>
          <div className="flex items-center gap-2 justify-start my-3">
            <p className="font-bold">Model:</p>
            <p>{model}</p>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <p className="font-bold">Storage:</p>
            <p>
              {storage.map((s, index) => (
                <span key={index} className="block">
                  {s}
                </span>
              ))}
            </p>
          </div>
          <div className="flex items-start gap-2 justify-start my-3">
            <p className="font-bold">Price:</p>
            <div>
              {Object.entries(price).map(([specification, onePrice]) => (
                <p key={specification}>
                  {specification}: {onePrice}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-start">
            <p className="font-bold">Camera Info :</p>
            <p>{camera_info}</p>
          </div>
          <div className="flex items-center gap-2 justify-start my-3">
            <p className="font-bold">Description :</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
