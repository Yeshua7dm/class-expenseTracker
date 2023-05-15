import Card from "./Card";
import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
