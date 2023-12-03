import React from "react";

export default function Card(props) {
  const { name, cuisine, starRatings, deliveryTime } = props.data;
  return (
    <div className=" p-4">
      <div className="h-64 w-44 bg-white rounded-lg overflow-hidden p-2">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg shadow-lg"
        />
        <p className="text-lg font-bold">{name}</p>
        <p>{cuisine}</p>
        <p> {starRatings}</p>
        <p> {deliveryTime}</p>
      </div>
    </div>
  );
}
