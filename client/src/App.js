import React from "react";
import { Routes, Route } from "react-router-dom";
import Foot from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Homepage from "./components/Guest/Homepage";
import { Profile } from "./components/Auth0";
import { GuestRoutes, CustomerRoutes } from "./components/Routes";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />

                <Route element={<GuestRoutes />}>
                    <Route exact path="/homepage" element={<Homepage />} />
                </Route>

                <Route element={<CustomerRoutes />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
            <Foot />
        </div>
    );
}

export default App;
