// using rfce shortcut

import Header from "./components/Header";

function App() {
  //App: parent component
  //Header: Child Component

  // here name is the attribute
  // passing data from parent to child
  return (
    <>
      <Header name={"Krishs"} age={"25"} />
      <Header name={"srinivas"} age={"30"} />
    </>
  );
}

export default App;
