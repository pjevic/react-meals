import { useContext, useEffect, useState } from "react";

import CartContext from "../../../store/cart-context";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlited, setBtnIsHighlihted] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlihted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlihted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
