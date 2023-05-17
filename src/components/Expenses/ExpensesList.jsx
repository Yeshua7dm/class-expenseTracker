import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expensesArray }) => {
  let displayContent = (
    <p className="expenses-list__fallback">No expenses found</p>
  );

  if (expensesArray.length > 0) {
    displayContent = expensesArray.map(({ id, date, amount, title }) => (
      <ExpenseItem
        expenseAmount={amount}
        expenseDate={date}
        expenseTitle={title}
        key={id}
      />
    ));
  }

  return <ul className="expenses-list">{displayContent}</ul>;
};

export default ExpensesList;
