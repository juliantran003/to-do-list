const Create = (props) => {
  return (
    <form className="form">
      <input
        className="add"
        type="text"
        placeholder="new task"
        value={props.inputValue}
        onChange={props.inputOnChange}
      />
      <button type="submit" onClick={props.click}>
        Add Task
      </button>
    </form>
  );
};

export default Create;
