
import { Container } from '@mui/material';
import Header from './Header';
import PageTitle from './PageTitle';
import MainPage from './MainPage';
import Footer from './Footer';
import Description from './Description';

function Home( { lang, matches, setLang }) {

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
        lang= {lang}
        matches= {matches}
      />
      
    </Container>
    );
}

export default Home;