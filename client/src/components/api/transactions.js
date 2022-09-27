export const getAllTransactions = async () => {
    const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/transactions`,
        {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        }
    );
    const data = await res.json({});
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return data;
};

export const addTransaction = async (transaction, image, user) => {
    const formData = new FormData();
    formData.append("userId", user.data._id);
    formData.append("name", transaction.name);
    formData.append("transactionType", transaction.transactionType);
    formData.append("description", transaction.description);
    formData.append("amount", transaction.amount);
    formData.append("category", transaction.category);
    formData.append("date", transaction.date);
    formData.append("image", image);

    const res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/transactions`,
        {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem("token"),
            },
            body: formData,
        }
    );
    const data = await res.json({});
    return data;
};

export const deleteTransaction = async (id) => {
    let res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/transactions/${id}`,
        {
            method: "DELETE",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
        }
    );
    let data = await res.json();
    return data;
};

export const updateTransaction = async (transaction, image, id) => {
    const formData = new FormData();
    formData.append("name", transaction.name);
    formData.append("transactionType", transaction.transactionType);
    formData.append("description", transaction.description);
    formData.append("amount", transaction.amount);
    formData.append("category", transaction.category);
    formData.append("date", transaction.date);
    formData.append("image", image);

    let res = await fetch(
        `${process.env.REACT_APP_API_SERVER}/transactions/${id}`,
        {
            method: "PUT",
            headers: {
                "x-auth-token": localStorage.getItem("token"),
            },
            body: formData,
        }
    );
    let data = await res.json();
    return data;
};
