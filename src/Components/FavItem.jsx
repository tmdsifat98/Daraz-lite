import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const FavItem = ({ phone, handleRemove }) => {
  const { name, id, image, description } = phone;

  return (
    <div className="card bg-base-100 shadow-sm relative">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/phoneDetails/${id}`}>
            <button className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                View details
              </span>
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={() => handleRemove(id)}
        className="absolute transition-all duration-300 bg-gray-600 p-2 hover:text-black text-white cursor-pointer hover:bg-gray-200 rounded-full -top-3 -right-3"
      >
        <MdDeleteForever size={17} />
      </button>
    </div>
  );
};

export default FavItem;
