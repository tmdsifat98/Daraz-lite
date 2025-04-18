import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "../Utilities/Button";

const Phones = ({ phones }) => {
  const [show, setShow] = useState(true);
  const [phoneCards, setPhoneCards] = useState([]);
  useEffect(() => {
    if (show) return setPhoneCards(phones.slice(0, 6));
    setPhoneCards(phones);
  }, [phones, show]);

  return (
    <div className="lg:w-3/4 w-full mx-auto gap-5 grid lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 mt-14">
      {phoneCards.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
      <Button
        onClick={() => {
          setShow(!show);
          if (!show) window.scrollTo(0, 500);
        }}
        label={show ? "Show More" : "Show Less"}
      />
    </div>
  );
};

export default Phones;
