import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenseItems = [
    {
      id: "e1",
      date: new Date(2020, 2, 28),
      amount: 23000,
      title: "Car Insurance",
    },
    { id: "e2", date: new Date(2020, 4, 2), amount: 29000, title: "Car Sale" },
    {
      id: "e3",
      date: new Date(2020, 5, 8),
      amount: 20000,
      title: "Vehicle Maintenance",
    },
  ];
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
