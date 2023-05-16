import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveExpense }) => {
  const saveExpenseHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    onSaveExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
