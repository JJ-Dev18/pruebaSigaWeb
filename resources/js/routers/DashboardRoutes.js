import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard/>}
                    />

                    <Route
                        path="/edit/"
                        element={<p>User edit</p>}
                    />
                </Routes>
            </div>
        </>
    );
};
