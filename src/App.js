import React, { useState } from "react";
import "./App.css";
import Card from "./card";

const App = (props) => {
  // first state  
  const [CardName, SetCardName] = useState({
    Name: [{ name: "Bigman" }, { name: "majid" }, { name: "Japan" }],
  });
  // set stat with hooks 
  const ForClick = () => {
    SetCardName({
      Name: [{ name: "John" }, { name: "Ali" }, { name: "Japman" }],
    });
  };

  return (
    <>
      <div className="title">
        <h1>image gallary</h1>
        <hr />
      </div>
      <div className="container">
        <Card name={CardName.Name[1].name} />
        <Card name={CardName.Name[0].name} />
        <Card name={CardName.Name[2].name} />
        <Card name={CardName.Name[0].name} />
      </div>
      <button onClick={ForClick}>change name</button>
    </>
  );
};
// class App extends React.Component {
//   state =
//   ForClick = () => {

//   };

//   render() {
//
//   }
// }

export default App;
