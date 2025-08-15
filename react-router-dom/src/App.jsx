import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Career from "./components/Career";
import Services from "./components/Services";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import User from "./components/User";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />

          {/* Dynamic Route */}

          <Route path="/user/:username" element={<User />} />

          {/* Fallback Route  */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
