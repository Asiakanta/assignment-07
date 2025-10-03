import React from "react";
import { CiCalendar } from "react-icons/ci";

const TicketBox = ({ data, handleTicket }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500"></p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((issue) => {
        const isOpen = issue.status === "Open";

        return (
          <div
            key={issue.id}
            onClick={() => handleTicket(issue)}
            className="bg-gray-50 shadow shadow-emerald-100 rounded-xl p-4 mb-2 cursor-pointer hover:shadow-lg transition"
          >
            {/* Title + Status */}
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{issue.title}</h2>
              <span
                className={`flex items-center gap-2 ${
                  isOpen
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                } rounded-full px-2 py-[2px] text-xs font-medium`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    isOpen ? "bg-green-600" : "bg-yellow-600"
                  }`}
                ></span>
                {issue.status}
              </span>
            </div>

            {/* Description */}
            <p className="my-3 text-sm text-gray-600">{issue.description}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-[11px] text-gray-500">
              <div className="flex gap-2">
                <p>#{issue.id}</p>
                <p
                  className={
                    issue.priority === "High Priority"
                      ? "text-red-500"
                      : issue.priority === "Medium Priority"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }
                >
                  {issue.priority}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p>{issue.customer}</p>
                <p className="flex items-center gap-1">
                  <CiCalendar /> {issue.createdAt}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketBox;
