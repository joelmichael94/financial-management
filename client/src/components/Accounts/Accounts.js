import { Link } from "react-router-dom";

export const Period = () => {
    return (
        <div className="flex justify-start py-3 px-5 gap-5">
            <Link to="/daily" className="btn btn-ghost font-extrabold">
                Daily
            </Link>
            <Link to="/weekly" className="btn btn-ghost font-extrabold">
                Weekly
            </Link>
            <Link to="/monthly" className="btn btn-ghost font-extrabold">
                Monthly
            </Link>
        </div>
    );
};

export const Totals = () => {
    return (
        <div className="flex justify-evenly bg-neutral py-4">
            <h1 className="text-green-400">Income: </h1>
            <h1 className="text-red-500">Expenses: </h1>
            <h1 className="text-yellow-400">Balance: </h1>
        </div>
    );
};

export const AddTransactionBttn = () => {
    return (
        <div className="flex justify-start items-center py-3 px-5">
            <button className="btn btn-ghost font-extrabold">
                ➕ Add Transaction
            </button>
        </div>
    );
};

export const AddTransaction = () => {};

export const Daily = () => {
    return (
        <div>
            {<Period />}
            {<Totals />}
            {<AddTransactionBttn />}
            <div className="flex justify-center items-center py-20">
                <div className="grid grid-cols-1 gap-6 w-3/5">
                    <div className="card card-side bg-sky-700 shadow-[0_0px_20px_1px_rgba(255,255,255,0.4)]">
                        <div className="card-body">
                            <h2 className="card-title">
                                Get all and map the transactions that match the
                                userId and the date for date.now()
                            </h2>
                            <p>Transaction description / notes</p>
                            <div>
                                <h1>Transaction amount: </h1>
                                <h1>Transaction date: </h1>
                                <h1>Transaction tags / categories, etc. : </h1>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img
                                src="https://placeimg.com/200/200/arch"
                                alt="Movie"
                                className="mask mask-squircle"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Weekly = () => {
    return (
        <div>
            {<Period />}
            {<Totals />}
            {<AddTransactionBttn />}
            <h1>7 days transaction results</h1>
            <p>7 rows for each day</p>
            <h3>show the day of the week date</h3>
            <h3>show the income, expenses, balance</h3>
        </div>
    );
};

export const Monthly = () => {
    return (
        <div>
            {<Period />}
            {<Totals />}
            {<AddTransactionBttn />}
            <h1>week 1 - 5 transaction results</h1>
            <p>1 - 5 rows for each week</p>
            <h3>show the week start and end date</h3>
            <h3>show the income, expenses, balance</h3>
        </div>
    );
};
