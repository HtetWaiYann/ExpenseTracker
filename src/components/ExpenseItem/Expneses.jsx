import React from 'react'

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";


const Expneses = (props) => {
  return (
    <div className="expenses">
        {
        props.items.map(({id, title, amount, date}) => {
          return (
            <ExpenseItem key={id} title={title} amount={amount} date={date}/>
          )
        })
      }
    </div>
  )
}

export default Expneses