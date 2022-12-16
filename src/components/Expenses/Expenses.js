/**
 * @author Sylverster kanyane
 */
import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseStyles/Expenses.css";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={yearChangeHandler}
      />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
