import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Index from './components/SchoolsAndColleges/Index';

function App() {
  return (
    <Router basename="/chettinad-react">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/schoolsandcolleges" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;