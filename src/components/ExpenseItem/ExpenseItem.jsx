import React from 'react'

import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
        <div>January 28th 2023</div>
        <div className='expense-item__description'>
            <h2>Eating</h2>
            <div className='expense-item__price'>5000 MMK</div>
        </div>
    </div>
  )
}

export default ExpenseItem