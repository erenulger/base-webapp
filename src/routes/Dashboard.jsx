import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  console.log(session);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div className="dashboard-actions">
        <button
          onClick={() => navigate('/contactlist')}
          className="contact-list-btn border px-4 py-3 mt-4 mr-4 hover:bg-gray-100"
        >
          View Contact List
        </button>
        <p
          onClick={handleSignOut}
          className="sign-out-btn hover:cursor-pointer border inline-block px-4 py-3 mt-4"
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Dashboard;