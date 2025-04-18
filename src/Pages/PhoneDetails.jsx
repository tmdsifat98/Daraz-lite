import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../Utilities/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { getCart, setCart, setFavorite } from "../Utilities/utils";
import { CartContext } from "../Providers/Context";

const PhoneDetails = () => {
  const { setAddCart } = useContext(CartContext);
  const { phoneId } = useParams();
  const phones = useLoaderData();
  const singlePhone = phones.find((phone) => phone.id === parseInt(phoneId));
  const { name, image, description, model, brand, storage } = singlePhone;

  const handleFavorite = (singlePhone) => {
    setFavorite(singlePhone);
  };
  const handleCart = (singlePhone) => {
    setCart(singlePhone);
    setAddCart(getCart());
  };

  return (
    <div>
      <div>
        <img
          className="w-[650px] object-center my-6 mx-auto"
          src={image}
          alt=""
        />
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-semibold my-5 w-2/3">{name}</h1>
          <span className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Button
              onClick={() => handleCart(singlePhone)}
              label={<FaCartArrowDown />}
            />
            <Button
              onClick={() => handleFavorite((prev) => [...prev, singlePhone])}
              label={<MdBookmarkAdd />}
            />
          </span>
        </div>
        <p className="text-4xl font-thin my-5">Details:</p>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>Model:</td>
              <td>{model}</td>
            </tr>
            <tr>
              <td className="w-6">Storage:</td>
              <td>
                {storage.map((s, index) => (
                  <span key={index} className="block">
                    {s}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="w-6">Price:</td>
              <td>Not Announced</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
        <p className=" mb-3">
          <span className="font-bold"></span>
        </p>
        <p className=" mb-3">
          <span className="font-bold"></span>
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
