import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { getAllTransactions } from "../api/transactions";
import { useQuery } from "react-query";
import { AddTransactionBttn, TransactionList } from "../Transaction";
import {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
} from "./Days";

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

export const Daily = () => {
    return (
        <div>
            {<Period />}
            {<Totals />}
            {<AddTransactionBttn />}
            <h1 className="text-center text-4xl font-bold py-5 underline">
                Daily Transactions
            </h1>
            {<TransactionList />}
        </div>
    );
};

export const Weekly = () => {
    const { data, error, isLoading, isError } = useQuery(
        ["transactions"],
        async () => await getAllTransactions()
    );

    if (isLoading) {
        return (
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    }

    if (isError) return <h2>Error: {error.message}</h2>;

    const income =
        data.length > 0
            ? data
                  .map((trans) => {
                      if (trans.transactionType === "Income") {
                          const date = new Date(trans.date);
                          const now = new Date();
                          const firstDay = now.setDate(
                              now.getDate() -
                                  now.getDay() +
                                  (now.getDay() === 0 ? -6 : 1)
                          );

                          const lastDay = now.setDate(
                              now.getDate() - (now.getDay() - 1) + 6
                          );

                          const today = date.getTime();
                          if (today >= firstDay && today <= lastDay)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const expense =
        data.length > 0
            ? data
                  .map((trans) => {
                      if (trans.transactionType === "Expense") {
                          const date = new Date(trans.date);
                          const now = new Date();
                          const firstDay = now.setDate(
                              now.getDate() -
                                  now.getDay() +
                                  (now.getDay() === 0 ? -6 : 1)
                          );

                          const lastDay = now.setDate(
                              now.getDate() - (now.getDay() - 1) + 6
                          );

                          const today = date.getTime();
                          if (today >= firstDay && today <= lastDay)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div>
            {<Period />}
            {<Totals />}
            {<AddTransactionBttn />}
            <div className="mb-10">
                <h1 className="text-center">This Week</h1>
                <div className="flex justify-evenly items-center">
                    <div>Income: RM {income}</div>
                    <div>Expenses: RM {expense}</div>
                    <div>Balance: RM {balance}</div>
                </div>
            </div>
            <div>
                <div>{<Monday />}</div>
                <div>{<Tuesday />}</div>
                <div>{<Wednesday />}</div>
                <div>{<Thursday />}</div>
                <div>{<Friday />}</div>
                <div>{<Saturday />}</div>
                <div>{<Sunday />}</div>
            </div>
        </div>
    );
};

export const Totals = () => {
    const { data, error, isLoading, isError } = useQuery(
        ["transactions"],
        async () => await getAllTransactions()
    );

    if (isLoading) {
        return (
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    }

    if (isError) return <h2>Error: {error.message}</h2>;

    const expense =
        data.length > 0
            ? data
                  .map((trans) => {
                      if (trans.transactionType === "Expense") {
                          const date = new Date(trans.date);
                          const now = new Date();
                          const transYear = date.getFullYear();
                          const transMonth = date.getMonth();
                          const transDay = date.getDate();
                          const nowYear = now.getFullYear();
                          const nowMonth = now.getMonth();
                          const nowDay = now.getDate();

                          if (
                              transYear === nowYear &&
                              transMonth === nowMonth &&
                              transDay === nowDay
                          )
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const income =
        data.length > 0
            ? data
                  .map((trans) => {
                      if (trans.transactionType === "Income") {
                          const date = new Date(trans.date);
                          const now = new Date();
                          const transYear = date.getFullYear();
                          const transMonth = date.getMonth();
                          const transDay = date.getDate();
                          const nowYear = now.getFullYear();
                          const nowMonth = now.getMonth();
                          const nowDay = now.getDate();

                          if (
                              transYear === nowYear &&
                              transMonth === nowMonth &&
                              transDay === nowDay
                          )
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="bg-base-300 py-2 rounded-full hover:bg-neutral">
            <h1 className="text-center text-xl font-bold uppercase pb-2">
                Today
            </h1>
            <div className="flex justify-evenly">
                <h1 className="text-green-400">Income: RM {income}</h1>
                <h1 className="text-red-500">Expenses: RM {expense}</h1>
                <h1 className="text-yellow-400">Balance: RM {balance}</h1>
            </div>
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
