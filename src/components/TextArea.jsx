function TextArea({ name, handleChange, keyname, value }) {
  return (
    <div className="inputs3">
      <p>{name}</p>
      <textarea
        name={keyname}
        id=""
        onChange={(event) => {
          handleChange(event.target.value, event.target.name);
        }}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextArea;
