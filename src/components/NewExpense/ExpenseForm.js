import React, { useState } from 'react';



const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onAmountChange = (event) => {
        setAmount(event['target']['value']);
    }
    const onDateChange = (event) => {
        setDate(event['target']['value']);
    }

    const onTitleChange = (event) => {
        setTitle(event['target']['value']); console.log(title);
    }

    const onSubmitExpense = (event) => {
        event.preventDefault();
        const submittedData = {
            title: title,
            amount: amount,
            date: date
        };
        props.onSubmitForm(submittedData)
    }

    return <form onSubmit={onSubmitExpense}
        style={{
            padding: "40px", marginLeft: "auto",
            marginRight: "auto", backgroundColor: "rgba(255, 255, 255, 0.75)",
            width: "30%", marginBottom: "50px", marginTop: "50px", borderRadius: "10px",
            display: "flex", flexDirection: "column"
        }} >
        <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="" style={{ display: "flex", flexDirection: "column" }}>
                    <label> Title</label>
                    <input type="text" value={title} onChange={onTitleChange} ></input>
                </div>
                <div className="" style={{ display: "flex", flexDirection: "column" }}>
                    <label> Amount</label>
                    <input type="number" value={amount} onChange={onAmountChange}></input>
                </div>

                <div className="" style={{ display: "flex", flexDirection: "column" }}>
                    <label>Date</label>
                    <input type="date" value={date} onChange={onDateChange} min="2018-01-01" max="2022-12-31"></input>
                </div>
            </div>
            <div></div>
        </div>
        <button type="submit" style={{ marginTop: "20px" }} >Add EXpense</button>
    </form>
};
export default ExpenseForm;