import { lazy } from "react";
import { Navigate } from "react-router-dom";
import "./style.css"
import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

const TicketNew = Loadable(lazy(() => import("app/views/ticket/ticket")));

const AllTickets = Loadable(lazy(() => import("app/views/ticket/alltickets")));

const EmployeeNew = Loadable(lazy(() => import("app/views/employee/employee")));

const AllEmployees = Loadable(lazy(() => import("app/views/employee/allemployees")));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      // e-chart route
      // { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      { path: "/ticket/ticket", element: <TicketNew /> },
      { path: "/ticket/alltickets", element: <AllTickets /> },
      { path: "/employee/employee", element: <EmployeeNew /> },
      { path: "/ticket/allemployees", element: <AllEmployees /> },
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
