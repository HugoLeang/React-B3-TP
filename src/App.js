import React from "react";
import "./App.css";
import DashboardView from "./Views/DashboardView";
import ConnectionView from "./Views/ConnectionView";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import ProtectedRoute from "./Components/ProtectedRouteComponent/ProtectedRoute";
function App() {
  const UserStore = React.createContext();

  return (
    <UserStore.Provider value={{ email: "", connected: false }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ConnectionView />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  UserStore={UserStore}
                  redirectPath={"/"}
                  isConnected={UserStore.connected}
                >
                  <DashboardView />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </UserStore.Provider>
  );
}

export default App;
