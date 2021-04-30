import "./App.css";
import { useState } from "react";
import Create from "./components/Create";

function App() {
  const [task, setTask] = useState("");
  const [tab, setTab] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    {
      const newTab = [...tab];
      newTab.push({ task });
      setTab(newTab);
      setTask("");
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const newTab = [...tab];
    newTab.splice({ task }, 1);
    setTab(newTab);
  };

  const [checkValue, setCheckValue] = useState(false);

  return (
    <div className="container">
      <Create
        click={handleSubmit}
        inputValue={task}
        inputOnChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <div className="list">
        {tab.map((elem, index) => {
          return (
            <div className="label" key={index}>
              <label
                style={{
                  textDecoration: checkValue === true ? "line-through" : "none",
                }}
              >
                <input
                  id="checkbox"
                  type="checkbox"
                  value={checkValue}
                  onClick={() => {
                    {
                      checkValue === false
                        ? setCheckValue(true)
                        : setCheckValue(false);
                    }
                  }}
                />
                {elem.task}
              </label>{" "}
              <i className="fas fa-trash-alt" onClick={handleDelete}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
