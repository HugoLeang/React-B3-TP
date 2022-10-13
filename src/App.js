import React from "react";
import "./App.css";
import DashboardView from "./Views/DashboardView";
import ConnectionView from "./Views/ConnectionView";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import ProtectedRoute from "./Components/ProtectedRouteComponent/ProtectedRoute";
import UserStore from "./Stores/UserStore";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStore>
          <Routes>
            <Route path="/" element={<ConnectionView />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute UserStore={UserStore} redirectPath={"/"}>
                  <DashboardView />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserStore>
      </BrowserRouter>
    </div>
  );
}

export default App;
