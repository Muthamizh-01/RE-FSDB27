import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://842ae100-b5fa-4e29-9c98-15396ca66193.mock.pstmn.io/products")
      .then((response) => response.json())
      .then((todos) => console.log(todos));
  }, []);

  return <div>App</div>;
};

export default App;
