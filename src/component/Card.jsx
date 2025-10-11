import React from "react";
import bg1 from "../../src/assets/bg1.png";
import bg2 from "../../src/assets/bg2.png";
const Card = ({ ticketTotal, resolveTotal }) => {
  return (
    <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto">
      <div
        className="rounded-md p-20 my-10 h-[220px] "
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <p className="text-white text-lg pb-3">In-Progress</p>
          <h2 className="text-white text-4xl font-bold">{ticketTotal}</h2>
        </div>
      </div>
      <div
        className="rounded-md p-20 my-10 h-[220px] w-full "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <p className="text-white text-lg pb-3">Resolved</p>
          <h2 className="text-white text-4xl font-bold">{resolveTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
