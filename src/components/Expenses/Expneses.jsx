import React from 'react'
import Card from '../UI/Card';

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";


const Expneses = (props) => {
  return (
    <Card className="expenses">
        {
        props.items.map(({id, title, amount, date}) => {
          return (
            <ExpenseItem key={id} title={title} amount={amount} date={date}/>
          )
        })
      }
    </Card>
  )
}

export default Expneses