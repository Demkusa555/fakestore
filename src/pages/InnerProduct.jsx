import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function InnerProduct() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});

  function handleGetOneProduct(id) {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }
  useEffect(() => {
    handleGetOneProduct(productid);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "600px",
        }}
      >
        <img
          src={product?.image}
          alt=""
          style={{
            width: "100%",
            height: "120px",
            objectFit: "contain",
          }}
        />

        <p>{product?.title}</p>
        <p>{product?.description}</p>

        <p>price:{product?.price}</p>
        <p>{product?.category}</p>
        <p>rate {product?.rating?.rate}</p>
        <p>rate count {product?.rating?.count}</p>
      </div>
    </div>
  );
}

export default InnerProduct;
