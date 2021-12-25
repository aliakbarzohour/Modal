import react from "react";
import Card from "./components/card"
import "./App.css"

function App() {
  return (
    <>
    <h1 className="m-3">image gallary</h1>
    <hr /> 
    <p>this project is my first project in React.js . so , welcome to this project </p>
    <hr />
    <div className="container">
      <div className="row m-3 justify-content-center">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
    </>
  );
}

export default App;
