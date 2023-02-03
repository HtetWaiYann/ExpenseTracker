import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props = { date: Date, title: String, amount: Number }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} MMK</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
