import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import "./charts/ChartjsConfig";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/protectedRoutes";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Clients from './pages/anagraphic/clients/Clients';
import AddClients from './pages/anagraphic/clients/AddClients';
import EditClient from './pages/anagraphic/clients/EditClient';
import Users from './pages/anagraphic/users/Users';
import AddUser from './pages/anagraphic/users/AddUser';
import UpdateUser from './pages/anagraphic/users/UpdateUser';
import AddSupplier from "./pages/anagraphic/suppliers/AddSupplier";
import Suppliers from "./pages/anagraphic/suppliers/Suppliers";
import EditSupplier from "./pages/anagraphic/suppliers/EditSupplier";

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <ToastContainer autoClose={1000} />
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Clients Routes */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-clients" element={<AddClients />} />
          <Route path="/update-client/:id" element={<EditClient />} />

          {/* User Routes */}
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" exact element={<AddUser />} />
          <Route path="/update-user/:id" exact element={<UpdateUser />} />

          {/* Suppliers Routes */}
          <Route path="/suppliers" exact element={<Suppliers />} />
          <Route path="/add-supplier" exact element={<AddSupplier />} />
          <Route path="/update-supplier/:id" element={<EditSupplier />} />



        </Route> 
        {/* protected routes end here */}


        {/* public routes */}
        <Route path="/" exact element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
