import React from "react";

const Navbar = () => {
    return (
        <div className="navbar py-4 btn-ghost rounded-b-full">
            {/* bg-base-100 */}
            <div className="flex-1 pl-8">
                <a
                    href="/"
                    className="btn-ghost normal-case text-xl pt-1 pb-2 px-10 rounded-full"
                >
                    easySave
                </a>
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
                        <li>
                            <a href="/" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
