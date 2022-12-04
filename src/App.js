import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; /* normally BrowserRouter, but changed as this goes to gh-pages, where that does not work*/
import Home from './components/Home';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';

function App() {
  const [lang, setLang] = useState('en'); // en or pt (english, portugese)
  const [matches, setMatches] = useState(false); // if screen width is min 700px, this is true

  useEffect(() => {
      // from https://upmostly.com/tutorials/how-to-use-media-queries-in-react
      const query = `(min-width: 770px)`;
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
          setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
 
  }, []);
  return (
    <Router>

      <Routes>

        <Route 
          path = "/" 
          exact element = {
            <Home
              lang= {lang}
              setLang= {setLang}
              matches= {matches}/>
          }
        />

        <Route 
          path = "/faq" 
          element= {
            <FAQ
              lang= {lang}
              setLang= {setLang}
              matches= {matches} />
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
            <Contact
            lang= {lang}
            setLang= {setLang}
            matches= {matches}  />
          }
        />

      </Routes>

    </Router>
  );
}

export default App;
