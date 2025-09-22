function TextInput({ name, type, keyname, handleChange, value }) {
  return (
    <div className="inputs2">
      <p>{name}</p>

      <input
        type={type}
        name={keyname}
        onChange={(event) => {
          handleChange(event.target.value, event.target.name);
        }}
        value={value}
      />
    </div>
  );
}

export default TextInput;
