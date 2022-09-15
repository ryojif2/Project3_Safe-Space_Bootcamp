import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardTherapistScreen = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardTherapistScreen;