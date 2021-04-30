const Task = (props) => {
  return (
    <div>
      <label className={props.taskStyle}>
        <input id="myCheckBox" type="checkbox" />
        {props.task}
      </label>
    </div>
  );
};

export default Task;
