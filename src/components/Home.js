import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import PageTitle from './PageTitle';
import MainPage from './MainPage';
import Footer from './Footer';
import Description from './Description';

function Home() {
  const [lang, setLang] = useState('en'); // en or pt (english, portugese)
  const [matches, setMatches] = useState(false); // if screen width is min 700px, this is true

  useEffect(() => {
      // from https://upmostly.com/tutorials/how-to-use-media-queries-in-react
      const query = `(min-width: 700px)`;
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
          setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
 
  }, []);

  return(
    <Container 
      maxWidth = "100vw"
      textalign= "center"
      >

      <Header
        lang= {lang}
        matches= {matches}
        setLang = {setLang}
      />

      <PageTitle
        lang= {lang}
        matches= {matches}
      />

      <Description
        lang= {lang}
        matches= {matches}
      />

      <MainPage
        lang= {lang}
        matches= {matches}
      />

      <Footer
        lang= {lang}/>
      
    </Container>
    );
}

export default Home;