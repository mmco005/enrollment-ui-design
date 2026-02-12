import React from "react";
import EnrollmentForm from "./EnrollmentForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "#004085" }}>
        ADEi University Digital Registrar
      </h1>
      <EnrollmentForm />
    </div>
  );
}

export default App;
