import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button
                onClick={() => loginWithRedirect()}
                className="btn btn-ghost normal-case text-lg bg-neutral"
            >
                Login / Register
            </button>
        )
    );
};

export default LogoutButton;
