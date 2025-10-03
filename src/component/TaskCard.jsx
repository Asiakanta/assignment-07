import React from "react";

const TaskCard = ({ issue, handleResolve }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-2">{issue.title}</h2>
      <button
        onClick={() => handleResolve(issue)}
        className="btn w-full bg-green-700 text-white font-lg rounded-2xl"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
