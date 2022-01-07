import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import  Login  from "../pages/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route
                    path="gestionCitas/public/"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="gestionCitas/public/dashboard/*"
                    element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};


