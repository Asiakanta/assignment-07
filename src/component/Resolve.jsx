import React from "react";

const Resolve = ({ issue }) => {
  return (
    <div className="bg-blue-50  rounded-xl p-3">
      <h2 className="text-lg font-semibold">{issue.title}</h2>
    </div>
  );
};

export default Resolve;
