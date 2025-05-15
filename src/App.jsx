import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDO, setToDo] = useState("");
  const [showCompleted, setShowCompleted] = useState(false); // new state

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>

      <div className="input">
        <input
          value={toDO}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDO, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>

      {toDos.map((obj) => (
        <div className="todos" key={obj.id}>
          <div className="todo">
            <div className="left">
              <input
                type="checkbox"
                checked={obj.status}
                onChange={(e) => {
                  setToDos(
                    toDos.map((item) =>
                      item.id === obj.id
                        ? { ...item, status: e.target.checked }
                        : item
                    )
                  );
                }}
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() =>
                  setToDos(toDos.filter((item) => item.id !== obj.id))
                }
              ></i>
            </div>
          </div>
        </div>
      ))}

      {toDos
        .filter((todo) => todo.status)
        .map((todo) => (
          <h1 key={todo.id}>{todo.text}</h1>
        ))}
    </div>
  );
}

export default App;
