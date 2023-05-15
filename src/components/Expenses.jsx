import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./styles/Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
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
