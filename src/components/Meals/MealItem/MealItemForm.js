import { useState, useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || eneteredAmountNumber < 1 || eneteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(eneteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entere a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
