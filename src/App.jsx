// using rfce shortcut

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
const App = () => {
  return <h1>Hello,, world</h1>;
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
