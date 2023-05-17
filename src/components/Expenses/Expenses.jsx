import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList expensesArray={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
