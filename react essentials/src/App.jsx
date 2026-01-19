//Mor optimal way for images SRC
import { Component } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </>
  );
}
export default App;
