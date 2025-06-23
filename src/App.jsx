//TODO: create a paragraph component - 'Paragraph'
// the component has a single paragraph with content "This is a Paragraph"

import Header from "./components/Header";
import Paragraph from "./components/Paragraph";

// creating our first component
function App() {
  let now = new Date();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  // App - Parent Component
  // Header - Child Component
  // Paragraph - Child Component for App
  return (
    <>
      <Header />
      <Paragraph t={time} />
    </>
  );
}
export default App;
