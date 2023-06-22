import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Projects from "./components/Projects";
import Form from "./components/Form"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <Projects />
      <Form />
    </>
  );
}

export default App;
