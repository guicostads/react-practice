import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Projects />
    </div>
  );
}

export default App;
