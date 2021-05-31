import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const SubmitForm = (submittedData) => {
        submittedData['date'] = new Date(submittedData['date'])
        const expenseData = {
            ...submittedData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return <div>
        <ExpenseForm onSubmitForm={SubmitForm} />
    </div>
};

export default NewExpense;