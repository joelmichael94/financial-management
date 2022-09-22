import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Foot from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Homepage from "./components/Guest/Homepage";
import {
    GuestRoutes,
    CustomerRoutes,
    ChooseRoutes,
    AdminRoutes,
} from "./components/Routes";
import { Login, Register } from "./components/Authentication/Authentication";
import { Accounts } from "./components/Accounts/Accounts";

function App() {
    // const [user, setUser] = useState(true);

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<ChooseRoutes />} />

                <Route element={<GuestRoutes />}>
                    <Route
                        path="/login"
                        element={
                            <>
                                <Navbar />
                                <Login />
                                <Foot />
                            </>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <>
                                <Navbar />
                                <Register />
                                <Foot />
                            </>
                        }
                    />
                    <Route
                        path="/homepage"
                        element={
                            <>
                                <Navbar />
                                <Homepage />
                                <Foot />
                            </>
                        }
                    />
                </Route>

                <Route element={<CustomerRoutes />}>
                    <Route
                        path="/accounts"
                        element={
                            <>
                                <Navbar />
                                <Accounts />
                                <Foot />
                            </>
                        }
                    />
                </Route>
                <Route element={<AdminRoutes />}></Route>
            </Routes>
        </div>
    );
}

export default App;
