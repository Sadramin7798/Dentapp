import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl font-semibold">Select Your Role</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => navigate("/dashboard")}>
        Doctor
      </button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => navigate("/dashboard")}>
        Student
      </button>
    </div>
  );
}