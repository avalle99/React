import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => {
          return (
            <ExpenseItem
              key={item.id} //React necesita un key prop si si esta renderizando listas. Sin el key, react actualiza toda la lista lo cual puede llevar a bugs. Con la key se identifica cada element y react solo renderiza los nuevos.
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
