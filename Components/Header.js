import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between shadow-2xl p-8">
      <div className="bg-red-600  w-12 h-12 text-2xl rounded-full"></div>
      <div>
        <ul className="flex gap-2">
          <li>home </li>
          <li>about </li>
          <li>contact </li>
        </ul>
      </div>
    </div>
  );
}
