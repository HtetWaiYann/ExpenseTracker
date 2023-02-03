import React from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props = { date: Date, title: String, amount: Number }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} MMK</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
