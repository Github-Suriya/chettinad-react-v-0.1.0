import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import CollegePage from './components/SchoolsAndColleges/CollegePage';
import ProgramsDetails from './components/SchoolsAndColleges/Partials/ProgramsDetails';
import KelambakkamCampus from './components/Campus/KelambakkamCampus';

function App() {
  return (
    <Router basename="/chettinad-react">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolsandcolleges/:slug" element={<CollegePage />} />
        <Route path="/schoolsandcolleges/:collegeSlug/programs/:programSlug" 
       element={<ProgramsDetails />} />
       <Route path='/campus/kelambakkam' element={<KelambakkamCampus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;