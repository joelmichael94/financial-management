import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Auth0/LoginButton";
import LogoutButton from "./components/Auth0/LogoutButton";
import Profile from "./components/Auth0/Profile";
import Foot from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Homepage from "./components/Guest/Homepage";

function App() {
    const { isLoading, error } = useAuth0();

    return (
        <div>
            <Navbar />
            <Homepage />
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Rilek leh . . Page is Loading . . .</p>}
            {!error && !isLoading && (
                <div>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                </div>
            )}
            <Foot />
        </div>
    );
}

export default App;
