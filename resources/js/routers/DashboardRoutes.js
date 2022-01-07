import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { CreateCita } from "../pages/CreateCita";
import { Citas } from "../pages/Citas";


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route path="/" element={<Dashboard />} />

                    <Route path="/edit/" element={<p>User edit</p>} />
                    <Route path="/createCita/" element={<CreateCita />} />
                    <Route path="/citas/" element={<Citas />} />
                </Routes>
            </div>
        </>
    );
};
