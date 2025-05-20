import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import CollegePage from './components/SchoolsAndColleges/CollegePage';
import ProgramsDetails from './components/SchoolsAndColleges/Partials/ProgramsDetails';

function App() {
  return (
    <Router basename="/chettinad-react">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolsandcolleges/:collegeSlug/programs/:programSlug" 
       element={<ProgramsDetails />} />
        <Route path="/schoolsandcolleges/:slug" element={<CollegePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;