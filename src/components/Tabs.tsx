"use client"; // This makes it a client-side component

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="max-w-7xl mx-auto p-4">
    <div className="flex flex-col md:flex-row gap-8 md:gap-32 mt-8">
      <div className="flex gap-8 md:gap-32">
        <p
          className={`${
            activeTab === "overview"
              ? "text-blue-800 border-b-2 border-blue-800 font-bold"
              : "text-gray-700"
          } text-lg cursor-pointer py-2`}
          onClick={() => setActiveTab("overview")}
        >
          OverView
        </p>
        <p
          className={`${
            activeTab === "amenities"
              ? "text-blue-800 border-b-2 border-blue-800 font-bold"
              : "text-gray-700"
          } text-lg cursor-pointer py-2`}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </p>
        <p
          className={`${
            activeTab === "policies"
              ? "text-blue-800 border-b-2 border-blue-800 font-bold"
              : "text-gray-700"
          } text-lg cursor-pointer py-2`}
          onClick={() => setActiveTab("policies")}
        >
          Policies
        </p>
      </div>

      {/* Horizontal Line under Tabs */}
      <div className="border-t-2 border-gray-300 w-full mt-0"></div>
    </div>
    </div>
  );
};

export default Tabs;
