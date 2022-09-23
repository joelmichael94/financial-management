import { useState } from "react";
import { login, register } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

export const Login = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const mutation = useMutation(async (user) => await login(user), {
        onSuccess: () => {
            navigate("/daily");
        },
    });

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = () => {
        mutation.mutate(user);
    };

    return (
        <div>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    onChange={onChangeHandler}
                    className="border border-slate-500 px-2 py-1 rounded m-2"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                    className="border border-slate-500 px-2 py-1 rounded m-2"
                />
            </div>
            <button
                onClick={onSubmitHandler}
                className="bg-slate-300 px-2 py-1 rounded m-2 hover:border hover:border-slate-600"
            >
                Login
            </button>
        </div>
    );
};

export const Register = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const mutation = useMutation((user) => register(user), {
        onSuccess: () => {
            navigate("/login");
        },
    });

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = () => {
        mutation.mutate(user);
    };

    return (
        <div>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    onChange={onChangeHandler}
                    className="border border-slate-500 px-2 py-1 rounded m-2"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={onChangeHandler}
                    className="border border-slate-500 px-2 py-1 rounded m-2"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                    className="border border-slate-500 px-2 py-1 rounded m-2"
                />
            </div>
            <button
                onClick={onSubmitHandler}
                className="bg-slate-300 px-2 py-1 rounded m-2 hover:border hover:border-slate-600"
            >
                Register
            </button>
        </div>
    );
};
