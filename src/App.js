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
    for (let i = 0; i < tab.length; i++) {
      if (tab[i] === event) {
        tab.splice(i, 1);
      }
    }
  };

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
              <label>
                <input type="checkbox" />
                {elem.task}
              </label>{" "}
              <i
                className="fas fa-trash-alt"
                onClick={() => {
                  handleDelete(index);
                }}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
