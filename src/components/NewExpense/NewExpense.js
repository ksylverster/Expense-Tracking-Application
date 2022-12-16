import React, { useState } from "react";
import "./NewExpenseStyles/NewExpense.css";
import ExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random() * 10000000) + 1).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditHandler = () => {
    setIsEditing(true);
  };
  const stopEditHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
