import React from 'react'
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
    if(props.expenses.length>0){
        return  ( props.expenses.map( (expense, index) => (
          <ExpenseItem
            key = {index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) )
    }
    else return  <p style={{color:"white"}}>No Data found</p>
}; 

export default ExpensesList;