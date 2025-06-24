// using rfce shortcut

import Hello from "./components/hello";
// import Header from "./components/Header";

function App() {
  // here passing data from child to parent
  function dataFromChild(name) {
    console.log("Function inside the parent component");
    console.log(name);
  }

  return (
    <>
      <Hello data={dataFromChild} />
    </>
  );
}
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

export default App;
