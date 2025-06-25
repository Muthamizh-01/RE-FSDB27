// using rfce shortcut

//import React from "react";

// CLASS COMPONENT IN REACT
// extends keyword for inheritance
// class App extends React.Component {
//   render() {
//     return <h1>Hello hello world !!!</h1>;
//   }
// }

// import Hello from "./components/hello";
// import Header from "./components/Header";

// FUNCTIONAL COMPONENT IN REACT
// function App() {
//   return <h1>HEllo world</h1>;
// }

// FUNCTIONAL COMPONENET USING FUNCTION EXPRESSIONS
// const App = function () {
//   return <h1>Hello, world</h1>;
// };

// FUNCTIONAL COMPONENT USING ARROW FUNCTION - "MOSTLY PREFERRED"

// multiple components in react using functional components
//passing data - here the data name is passed
const Hello = (props) => {
  return <h1>hello worlddddedd{props.name}!!!</h1>;
};
const App = () => {
  return <Hello name="DENIS" />;
};
export default App;

//   //App: parent component
//   //Header: Child Component

//   // here name is the attribute
//   // passing data from parent to child
// return (
//   <>
//     <Header name={"Krishsann"} age={"25"} />
//     <Header name={"srinivas"} age={"30"} />
//   </>
// );

//  // here passing data from child to parent
//   function dataFromChild(name) {
//     console.log("Function inside the parent component");
//     console.log(name);
//   }
//   return (
//     <>
//       <Hello data={dataFromChild} />
//     </>
//   );
