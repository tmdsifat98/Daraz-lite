import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "../Utilities/Button";

const Phones = ({ data }) => {
  const [show, setShow] = useState(true);
  const [phoneCards, setPhoneCards] = useState([]);
  useEffect(() => {
    if(show) return setPhoneCards(data.slice(0, 6));
  }, [show]);
  

  return (
    <div>
      <div className="lg:w-3/4 mx-auto grid lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 mt-14">
        {phoneCards.map((phone) => (
          <PhoneCard phone={phone} />
        ))}
      </div>
      <Button onClick={()=>setShow(!show)} label={show ? "Show More" : "Show Less"} />
    </div>
  );
};

export default Phones;
