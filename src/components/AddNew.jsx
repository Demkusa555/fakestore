import { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

function AddNew() {
  const [prductData, setProductdata] = useState({
    title: "",
    price: 0.1,
    desc: "",
    category: "",
    img: "",
  });

  function handleAddNew(value, key) {
    setProductdata((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  function handleSave() {
    if (
      prductData.title &&
      prductData.price &&
      prductData.desc &&
      prductData.category &&
      prductData.img
    ) {
      console.log(filled);
    } else {
      window.alert("sheavse");
    }
    return;
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

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        addNew
      </button>
      {toggle && (
        <div className="addnew">
          <div className="Addnew">
            <div className="inputs">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>add new product</h2>
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
                  <TextInput />
                  <TextInput type={changeType} />
                  <TextArea />
                  <TextInput />
                  <TextInput />
                </div>
              </div>
            </div>

            <button onClick={handleSave}>save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNew;
