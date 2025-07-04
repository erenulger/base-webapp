import { useContext, useState } from "react";
import ContactList from './components/ContactList'
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";

import { UserAuth } from "./context/AuthContext";

function App() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/contactlist" element={<ContactList />} />
      </Routes>
    </div>
  );
}

export default App;