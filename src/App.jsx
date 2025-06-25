// using rfce shortcut
// use rafce shortcut - default arrow function
// rce - for class component

import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h2>Likes: {likes} </h2>
      <button onClick={handleLike}>Like</button>
      &nbsp;&nbsp;
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
};
export default App;
