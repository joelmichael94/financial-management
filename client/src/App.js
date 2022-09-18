import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
    const { isLoading, error } = useAuth0();

    return (
        <div>
            <h1>Auth0 Login</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Rilek leh . . Page is Loading . . .</p>}
            {!error && !isLoading && (
                <div>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                </div>
            )}
        </div>
    );
}

export default App;
