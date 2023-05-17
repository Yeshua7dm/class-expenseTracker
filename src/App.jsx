import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 2, 28),
    amount: 23000,
    title: "Car Insurance",
  },
  { id: "e2", date: new Date(2022, 4, 2), amount: 29000, title: "Car Sale" },
  {
    id: "e3",
    date: new Date(2019, 5, 8),
    amount: 20000,
    title: "Vehicle Maintenance",
  },
];
function App() {
  const [expenseItems, setExpenseItems] = useState(EXPENSES);

  const addExpenseHandler = (newData) => {
    setExpenseItems((previous) => {
      return [newData, ...previous];
    });
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expenses allExpenses={expenseItems} />
    </div>
  );
}

export default App;
