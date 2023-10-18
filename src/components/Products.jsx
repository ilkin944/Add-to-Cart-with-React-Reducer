/* eslint-disable react/prop-types */
const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  console.log("products:", products);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "75%"
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{product.title} </span>
            <b>$ {product.price}</b>
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "#fff"
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "#fff"
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    qty: 1,
                    price: product.price
                  }
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
