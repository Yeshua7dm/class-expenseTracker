import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveExpense }) => {
  const [formDisplay, setFormDisplay] = useState(false);

  const saveExpenseHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    onSaveExpense(expenseData);
  };

  const hideShowForm = () => {
    setFormDisplay((previous) => !previous);
  };
  return (
    <div className="new-expense">
      {formDisplay ? (
        <ExpenseForm
          onSaveNewExpense={saveExpenseHandler}
          onFormComplete={hideShowForm}
        />
      ) : (
        <button onClick={hideShowForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
