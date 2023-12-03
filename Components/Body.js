import React from "react";
import Card from "./Card";

export default function Body() {
  const dataList = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Spaghetti Bolognese",
      cuisine: "Italian",
      starRatings: 4.5,
      deliveryTime: "30 minutes",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sushi Platter",
      cuisine: "Japanese",
      starRatings: 4.8,
      deliveryTime: "40 minutes",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vegetarian Pizza",
      cuisine: "Italian",
      starRatings: 4.0,
      deliveryTime: "35 minutes",
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chicken Tikka Masala",
      cuisine: "Indian",
      starRatings: 4.2,
      deliveryTime: "50 minutes",
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Green Salad",
      cuisine: "Healthy",
      starRatings: 4.7,
      deliveryTime: "25 minutes",
    },
  ];

  return (
    <div>
      {/* search */}
      <div className="flex">
        <input
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2 m-2 "
          placeholder="Search branch name..."
        />
        <button>search</button>
      </div>
      {/* card container */}
      <div className="flex flex-wrap bg-red-400">
        {dataList.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}
