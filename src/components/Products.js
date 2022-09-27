import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../store/actions";
import { Wrapper, Form, Items, Button } from "../style/ProductsStyle";

export const Products = () => {
  const productList = useSelector((state) => state.productList);
  const baseUrl = useSelector((state) => state.baseUrl);
  const dispatch = useDispatch();

  const addToCart = (e, element) => {
    e.preventDefault();
    dispatch(
      addItems({
        id: element.id,
        url: element.url,
        name: element.name,
        price: element.price,
      })
    );
  };

  return (
    <Wrapper>
      {productList.map((element, index) => {
        return (
          <Form key={index}>
            <Items shoes={baseUrl + element.url} />
            <Button onClick={(e) => addToCart(e, element)}>Add to Cart</Button>
          </Form>
          // <div>
          //   {baseUrl + element.url}
          // </div>
        );
      })}
    </Wrapper>
  );
};

export default Products;
