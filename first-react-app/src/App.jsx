// import About from "./components/About";
import Home from "./components/Home";
// import Service from "./components/Service";

function App() {
  //components jsx - html and js
  return (
    <>
      {/* //num - props */}
      <Home num={1 * 3} />
      <Home num={2 * 3} />
      <Home num={3 * 3} />
      {/* <About />
      <Service /> */}
    </>
  );
}

export default App;
