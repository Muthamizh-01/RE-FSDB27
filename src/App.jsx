// // using rfce shortcut
// // use rafce shortcut - default arrow function
// // rce - for class component

// import { useState } from "react";
// //import React from "react";

// const App = () => {
//   const [reactions, setReactions] = useState({
//     likes: 0,
//     dislikes: 0,
//   });

//   const handleLike = () => {
//     setReactions({
//       ...reactions,
//       likes: reactions.likes + 1,
//     });
//   };

//   const handleDislike = () => {
//     setReactions({
//       ...reactions,
//       dislikes: reactions.dislikes + 1,
//     });
//   };

//   console.log(reactions);

//   return (
//     <div>
//       <h2>Likes: {likes} </h2>
//       <h2>Dislikes: {dislikes}</h2>
//       <button onClick={handleLike}>Like</button>
//       &nbsp;&nbsp;
//       <button onClick={handleDislike}>Dislike</button>
//     </div>
//   );
// };
// export default App;

import { useState } from "react";

export default function App() {
  const [reactions, setReactions] = useState({ likes: 0, dislikes: 0 });

  const handleLike = () =>
    setReactions((prev) => ({ ...prev, likes: prev.likes + 1 }));

  const handleDislike = () =>
    setReactions((prev) => ({ ...prev, dislikes: prev.dislikes + 1 }));

  // ✧ one-liner destructuring:
  const { likes, dislikes } = reactions;

  return (
    <div className="p-4 space-x-4">
      <h2>Likes: {likes}</h2>
      <h2>Dislikes: {dislikes}</h2>

      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
}
