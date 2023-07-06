import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  };

  // console.log(props.items[0].date.getFullYear().toString());

  const filteredItems = props.items.filter((item) => {
    // console.log(item.date.getFullYear());
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultValue={filteredYear}
        onChangeFilter={FilterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      <ExpensesList items={filteredItems}></ExpensesList>
    </Card>
  );
}
