import react from "react";
import Card from "./components/card";
import './App.css'

function App() {
  return (
    // start coding
    // React Fragment
    <>
      <h1 className="m">nice card</h1>
      <p>make a very nice card with semantic ui and react js for workout</p>
      <div className="ui special cards">
        <Card user="Aliakbar" nowtime='2022' />
        <Card user="Mahdi" nowtime='2022' />
        <Card user="Omid" nowtime='2022' />
        <Card user="Abolfazl" nowtime='2022' />
      </div>
    </>
  );
}

export default App;
