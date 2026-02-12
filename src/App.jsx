import React from "react";
import EnrollmentForm from "./EnrollmentForm"; // import the form component
import "./App.css"; // import your classy CSS styling

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ textAlign: "center", margin: "20px 0", color: "#004085" }}>
          ADEi University Digital Registrar
        </h1>
        <p style={{ textAlign: "center", color: "#6c757d" }}>
          Student Enrollment Portal
        </p>
      </header>

      {/* Render the Enrollment Form */}
      <EnrollmentForm />
    </div>
  );
}

export default App;
