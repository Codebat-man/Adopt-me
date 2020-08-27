import ReactDOM from "react-dom";
import React from "react";
import SearchParams from "./SearchParams.js";



const App = () => {
  //return React.createElement("div", {}, [
  //  React.createElement("h1", {}, "Adopt Me!"),
  //  React.createElement(Pet, {
  //    name: "Luna",
  //    animal: "Dog",
  //    breed: "Havenese",
  //  }),
  //  React.createElement(Pet, {
  //    name: "Pepper",
  //    animal: "Bird",
  //    breed: "Cocktail",
  //  }),
  //  React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  //  //All this info is passed down here into Pet Component,but we are not using it.
  //  //Props - It takes the info and passes it in as parameter called 'PROPS'
  //]);
  return (
    <React.StrictMode>
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
    </React.StrictMode>
  );

};

//So,We made the Rubber Stamp and Stamped it Three Times.
//What do you expect to see when we render this?

//We expect to see div which stamps h1,then Pet inside of which
//am inspect div and h1 and 2 h2s and that pattern repeating three times.

ReactDOM.render(<App />, document.getElementById("root"));
