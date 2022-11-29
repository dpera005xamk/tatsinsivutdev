import { HashRouter as Router, Route, Routes } from 'react-router-dom'; /* normally BrowserRouter, but changed as this goes to gh-pages, where that does not work*/
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';

function App() {
  return (
    <Router>

      <Routes>

        <Route 
          path = "/" exact
          element = {
            <Home/>
          }
        />

        <Route 
          path = "/about" 
          element= {
            <About />
          }
        />    

        <Route 
          path = "/services" 
          element= {
            <Services />
          }
        /> 
        
        <Route 
          path = "/blog" 
          element= {
            <Blog />
          }
        /> 
        
        <Route 
          path = "/contact" 
          element= {
            <Contact />
          }
        />

      </Routes>

    </Router>
  );
}

export default App;
