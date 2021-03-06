import "./App.css";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("show");

  const handleChange = () => {
    if (state === "add") {
      setstate("show");
    } else if (state === "show") {
      setstate("add");
    }
    // console.log(state);
  };
  return (
    <div className="App">
      <button className="togglebtn" onClick={handleChange}>
        {state === "show" ? "Add Student" : "Show Students"}
      </button>
      {state === "show" ? <ShowStudents /> : <AddStudent />}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
