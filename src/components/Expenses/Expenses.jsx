import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ allExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpenses = allExpenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  const filterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={filterByYear} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expensesArray={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
