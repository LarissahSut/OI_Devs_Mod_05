function Input(props) {
  return (
    <div className="inputContent">
      <label for="input">{props.label}</label>
      <input name="input" />
    </div>
  );
}

export default Input;
