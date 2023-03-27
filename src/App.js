
import Navbar from './NavComponents/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import Contact from './pages/contact';
import Teams from './pages/teams';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/team' element={<Teams />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
