import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import axios from "axios";

function UpdatePr({ title, price, description, category, image }) {
  const [prductData, setProductdata] = useState({
    title: "",
    price: 0.1,
    description: "",
    category: "",
    image: "",
  });

  function handleChange(value, key) {
    setProductdata((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  function handleSave(id) {
    axios
      .put(`https://fakestoreapi.com/products/${id}`, prductData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        window.alert("!");
      });
  }

  const [changeType, setChangeType] = useState("number");

  const toggleType = () => {
    setChangeType((prev) => (prev === "number" ? "text" : "number"));
  };

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  const closePopUp = () => {
    setToggle(false);
  };

  useEffect(() => {
    setProductdata({
      title,
      price,
      description,
      category,
      image,
    });
  }, [title, price, description, category, image]);

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Update
      </button>
      {toggle && (
        <div className="addnew">
          <div className="Addnew">
            <div className="inputs">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>update you'r product</h2>
                <button
                  onClick={() => {
                    closePopUp();
                  }}
                >
                  close
                </button>
              </div>

              <div className="inputs1">
                <div className="inputs">
                  <TextInput
                    name={"title"}
                    keyname={"title"}
                    handleChange={handleChange}
                    value={prductData.title}
                  />
                  <TextInput
                    name={"price"}
                    keyname={"price"}
                    type={changeType}
                    handleChange={handleChange}
                    value={prductData.price}
                  />
                  <TextArea
                    name={"description"}
                    keyname={"description"}
                    handleChange={handleChange}
                    value={prductData.description}
                  />
                  <TextInput
                    name={"category"}
                    keyname={"category"}
                    handleChange={handleChange}
                    value={prductData.category}
                  />
                  <TextInput
                    name={"image"}
                    keyname={"image"}
                    handleChange={handleChange}
                    value={prductData.image}
                  />
                </div>
              </div>
            </div>

            <button onClick={handleSave}>Update</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdatePr;
