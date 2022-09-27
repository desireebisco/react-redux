import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/actions";
import { Wrapper, Form, Items, Button } from "../style/ProductsStyle";

export const Cart = () => {
  const itemsInCart = useSelector((state) => state.itemsInCart);
  const baseUrl = useSelector((state) => state.baseUrl);
  const dispatch = useDispatch();

  const removeToCart = (e, idx) => {
    e.preventDefault();
    dispatch(removeItem(idx));
  };

  return (
    <Wrapper>
      {itemsInCart.map((element, index) => {
        return (
          <Form key={index}>
            <Items shoes={baseUrl + element.url} />
            <h2>{element.price}</h2>
            <Button onClick={(e) => removeToCart(e, index)}>Remove</Button>
          </Form>
        );
      })}
    </Wrapper>
  );
};
export default Cart;
