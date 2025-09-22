import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import AddNew from "../components/addNew";
import UpdatePr from "../components/UpdatePr";

function MainPage() {
  const [products, setProducts] = useState([]);

  function handleDeleteOne(deleteId) {
    axios
      .delete(`https://fakestoreapi.com/products/${deleteId}`)
      .then((response) => {
        console.log(response.data);

        window.alert("sucsesfully deleted");
      });
  }

  function handleGetAllProduct() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);

      setProducts(response.data);
    });
  }
  useEffect(() => {
    handleGetAllProduct();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <AddNew />
      <div className="main1">
        {products.map((product) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                height: "300px",
              }}
            >
              <img
                src={product.image}
                alt=""
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <p>{product.title}</p>

              <p>price:{product.price}</p>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => {
                    handleDeleteOne(product.id);
                  }}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  delete
                </button>
                <Link to={`/${product.id}`}>
                  <button>see more</button>
                </Link>

                <UpdatePr
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
