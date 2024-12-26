import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Leads from '../components/leads/Leads';
import Opportunity from "../components/opportunity/Opportunity";
import LeadDetails from "../components/leads/LeadDetails";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
    <Sidebar/>
      {/* Main content */}
      <div className="flex-grow flex flex-col">
        {/* Search bar at the top */}
        <Navbar />
        {/* Dynamic content */}
        <main className="p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    
      <Routes>
      
        <Route
          path="/leads"
          element={
            <Layout>
              <Leads />
            </Layout>
          }
        />
        <Route
          path="/opportunity"
          element={
            <Layout>
              <Opportunity />
            </Layout>
          }
        />
         <Route
          path="/leads/details"
          element={
            <Layout>
              <LeadDetails />
            </Layout>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
    
  );
};

export default AppRoutes;
