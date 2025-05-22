import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import CollegePage from './components/SchoolsAndColleges/CollegePage';
import ProgramsDetails from './components/SchoolsAndColleges/Partials/ProgramsDetails';
import KelambakkamCampus from './components/Campus/KelambakkamCampus';
import TopLoadingBar from './components/TopLoadingBar';
// Wrapper component to handle loading bar
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <TopLoadingBar loading={loading} />
      <Header />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/schoolsandcolleges/:slug" element={<CollegePage />} />
        <Route 
          path="/schoolsandcolleges/:collegeSlug/programs/:programSlug" 
          element={<ProgramsDetails />} 
        />
        <Route path='/campus/kelambakkam' element={<KelambakkamCampus />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router basename="/chettinad-react">
      <AppContent />
    </Router>
  );
}

export default App;