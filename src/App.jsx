import { useEffect } from "react";

const App = () => {
  const fetchTodos = async () => {
    const response = await fetch(
      "https://842ae100-b5fa-4e29-9c98-15396ca66193.mock.pstmn.io/products"
    );
    const todos = await response.json();
    console.log(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return <div>App</div>;
};

export default App;
