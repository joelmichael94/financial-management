import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className="navbar py-4 btn-ghost rounded-b-full">
            {/* bg-base-100 */}
            <div className="flex-1 pl-10">
                <Link
                    to="/"
                    className="btn-ghost normal-case text-xl pt-1 pb-2 px-7 rounded font-extrabold"
                >
                    easySave
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end pr-16">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                src="https://placeimg.com/80/80/people"
                                alt="UserImage"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 btn-ghost"
                    >
                        {isAuthenticated && (
                            <>
                                <li>
                                    <Link
                                        to="/profile"
                                        className="justify-between"
                                    >
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={() => logout()}>
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                        {!isAuthenticated && (
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Login / Register
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
