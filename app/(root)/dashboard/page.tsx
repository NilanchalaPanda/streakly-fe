import React, { FC } from "react";

const DashBoard: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to the Dashboard
      </h1>
      <p className="text-lg text-gray-100">
        Manage your tasks and track your progress efficiently.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default DashBoard;
