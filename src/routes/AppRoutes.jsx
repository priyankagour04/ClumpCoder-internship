import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Leads from '../components/leads/Leads';
import Opportunity from "../components/opportunity/Opportunity";
import LeadDetails from "../components/leads/LeadDetails";
import QuestionnaireForm from "../pages/QuestionnaireForm";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
    {/* Sidebar */}
    <div className="w-1/4 min-w-[200px] bg-primary h-full fixed">
      <Sidebar />
    </div>
  
    {/* Main Content */}
    <div className="ml-[25%] flex-grow flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Content Area */}
      <main className="flex-grow p-4 overflow-auto">
        {children}
      </main>
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
          <Route
          path="/questioniers/form"
          element={
            <Layout>
              <QuestionnaireForm />
            </Layout>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
    
  );
};

export default AppRoutes;
