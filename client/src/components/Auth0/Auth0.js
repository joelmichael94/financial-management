import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h2>My Profile</h2>
                {user.picture && (
                    <img src={user.picture} alt={user.family_name} />
                )}
                <h3>{user.family_name}</h3>
                <ul>
                    {Object.keys(user).map((objKey, i) => (
                        <li key={i}>
                            {objKey} : {user[objKey]}
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};
