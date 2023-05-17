import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ allExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpenses = allExpenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  const filterByYear = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={filterByYear} selected={filteredYear} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map(({ id, date, amount, title }) => (
          <ExpenseItem
            expenseAmount={amount}
            expenseDate={date}
            expenseTitle={title}
            key={id}
          />
        ))
      ) : (
        <p>No expenses found</p>
      )}
    </Card>
  );
};

export default Expenses;
