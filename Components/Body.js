import React from "react";
import Card from "./Card";

export default function Body() {
  return (
    <div>
      {/* 
        search bar
        card container
    */}

      <div className="flex">
        <input
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2 m-2 "
          placeholder="Search branch name..."
        />
        <button>search</button>
      </div>

      <div className="flex flex-wrap bg-red-400">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
