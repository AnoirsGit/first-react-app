import React, {useState} from 'react';
import Select from 'react-select'

import ExpenseList from './expensesList';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [expenses, setExpenses] = useState(props['items'])

  const onYearFilter = (event) => {
    console.log(event)
    setExpenses (props.items.filter( expense => expense['date'].getFullYear() === event['value']));
  }

  const options = [
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' }
  ]

  return (
    <Card className="expenses">
      <div style={{ width: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "30px" }} >
        <Select options={options} onChange={onYearFilter} />
      </div>
      <ExpenseList expenses = {expenses} />
    </Card>
  );
} 

export default Expenses;
