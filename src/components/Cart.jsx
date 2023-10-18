/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  console.log("Cart:", cart);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty
      }
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "25%"
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: ${total}</b>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
              border: "1px solid grey",
              margin: 5
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: 70, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly"
                }}
              >
                <span>{product.title}</span>
                <b>$ {product.price}</b>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <button onClick={() => changeQty(product.id, product.qty - 1)}>
                -
              </button>
              <span>{product.qty}</span>
              <button onClick={() => changeQty(product.id, product.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ alignSelf: "center", padding: 20, color: "#666" }}>
          Cart is empty!
        </span>
      )}
    </div>
  );
};

export default Cart;
