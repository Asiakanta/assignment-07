import { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import React from "react";
import TicketBox from "./ticketBox";
import Card from "./Card";
import TaskCard from "./TaskCard";
import Resolve from "./resolve";
import { toast } from "react-toastify";

const Box = ({ fetchPromise }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPromise().then((res) => setData(res));
  }, [fetchPromise]);

  const [ticketItems, setTicketItems] = useState([]);
  const [resolveItems, setResolveItems] = useState([]);

  const handleTicket = (issue) => {
    // console.log("Selected Issue:", issue);
    // setTicketItems((prev) => [...prev, issue]);
    const newTicketItems = [...ticketItems, issue];
    setTicketItems(newTicketItems);
    toast("In-Progress");
    return;
  };

  const handleResolve = (issue) => {
    const newResolveItems = [...resolveItems, issue];
    setResolveItems(newResolveItems);

    const remaining = ticketItems.filter((item) => item.id !== issue.id);
    setTicketItems(remaining);
  };

  return (
    <div>
      <Card
        ticketTotal={ticketItems.length}
        resolveTotal={resolveItems.length}
      />

      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-9">
          <h2 className="flex items-center gap-2 font-semibold text-2xl mb-10">
            Customer Tickets
          </h2>

          <TicketBox handleTicket={handleTicket} data={data} />
        </div>

        <div className="md:col-span-1 lg:col-span-3 space-y-5">
          <h2 className="font-semibold text-2xl mb-10">Task Status</h2>
          <div className="shadow p-10 space-y-5">
            {ticketItems.map((issue) => (
              <TaskCard
                handleResolve={handleResolve}
                key={issue.createdAt}
                issue={issue}
              ></TaskCard>
            ))}
          </div>
          <h2 className="font-semibold text-2xl mb-10">Resolved Task</h2>
          <div className="shadow p-10 space-y-5">
            {resolveItems.map((issue) => (
              <Resolve key={issue.id} issue={issue}></Resolve>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
