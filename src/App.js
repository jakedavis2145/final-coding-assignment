import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
    </Routes>
    </Router>
);
}
  
export default App;