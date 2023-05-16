import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      <ExpenseFilter  />
      {items.map(({ id, date, amount, title }) => (
        <ExpenseItem
          expenseAmount={amount}
          expenseDate={date}
          expenseTitle={title}
          key={id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
