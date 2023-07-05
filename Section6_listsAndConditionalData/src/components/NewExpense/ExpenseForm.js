import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleChangeHandler = function (event) {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.vale,
  //   // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = function (event) {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.vale,
  //   // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = function (event) {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: event.target.vale,
  //   // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input
          type="text"
          onChange={(event) => inputChangeHandler("title", event.target.value)}
          value={enteredTitle}
        />
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={(event) => inputChangeHandler("amount", event.target.value)}
          value={enteredAmount}
        />
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={(event) => inputChangeHandler("date", event.target.value)}
          value={enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
