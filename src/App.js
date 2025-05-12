import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>

    // <>
    
    //   <Header />
    //   <Home />
    //   <Footer />

    // </>

  );
}

export default App;