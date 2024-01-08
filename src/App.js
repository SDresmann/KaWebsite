import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomNavbar from './componets/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Tuition from './pages/Tuition';
import Location from './pages/Location';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />

        <Container className="mt-3">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/tuition" element={<Tuition/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;