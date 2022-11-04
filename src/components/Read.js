import React from "react";
import Header from "./Header";

function Read() {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="bg-primary-200 pb-10 order-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-40 rounded">
        <div className="min-h-screen mt-[-1px]">
          <div className="flex flex-col lg:flex-row">


          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
