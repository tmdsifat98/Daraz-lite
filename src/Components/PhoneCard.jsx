import React from "react";
import Button from "../Utilities/Button";

const PhoneCard = ({ phone }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={phone.image} alt={phone.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{phone.name}</h2>
        <p>{phone.description}</p>
        <div className="card-actions justify-end">
          <button class="relative inline-block px-4 py-2 font-medium group" >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span class="relative text-black group-hover:text-white"> View details </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
