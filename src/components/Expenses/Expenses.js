import React, { useState } from "react";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";


const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  // let filterInfoText = "2020,2022 & 2023";
  // if(filteredYear === '2020'){
  //   filterInfoText ="2021,2022 & 2023";
  // }  else if(filteredYear === '2022'){
  //   filterInfoText = "2020,2021 & 2023";
  // } else {
  //   filterInfoText = "2020, 2021 & 2022";
  // }
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>Data For Year {filterInfoText} is Hidden.</p> */}
        <ExpenseChart  expenses={filterExpenses}/>
        <ExpensesList  items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
