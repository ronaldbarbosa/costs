import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/company" element={ <Company /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="newproject" element={ <NewProject /> } />
        </Routes>
      </Container>
      
      <p>Footer</p>
    </Router>
  );
}

export default App;
