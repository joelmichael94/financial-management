import { ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllTransactions } from "../api/transactions";
import { Link } from "react-router-dom";

export const January = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 0)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 0)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">January</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const February = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 1)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 1)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">February</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const March = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 2)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 2)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">March</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const April = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 3)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 3)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">April</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const May = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 4)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 4)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">May</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const June = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 5)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 5)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">June</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const July = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 6)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 6)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">July</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const August = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 7)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 7)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">August</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const September = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 8)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 8)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">September</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const October = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 9)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 9)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">October</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const November = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 10)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 10)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">November</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const December = () => {
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 11)
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
                          const dateMonth = date.getMonth();
                          const dateYear = date.getFullYear();
                          const today = new Date();
                          const todayYear = today.getFullYear();

                          if (dateYear === todayYear && dateMonth === 11)
                              return trans.amount;
                      }
                      return false;
                  })
                  .reduce((a, b) => a + b)
            : 0;

    const balance = income - expense;

    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-full bg-neutral shadow-xl card-compact">
                <div className="card-body">
                    <h2 className="card-title">December</h2>
                    <div className="flex justify-between items-center">
                        <div>Income: RM {income}</div>
                        <div>Expenses: RM {expense}</div>
                        <div>Balance: RM {balance}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/">View transactions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
