import { useState } from 'react';
import { Container } from '@mui/material';
import Header from './Header'
import PageTitle from './PageTitle'
import MainPage from './MainPage'
import Footer from './Footer'
import Description from './Description'

function Home() {
  const [lang, setLang] = useState('en'); // en or pt (english, portugese)

  return(
    <Container 
      maxWidth = "100vw"
      textalign= "center"
      >

      <Header
        lang= {lang}
        setLang = {setLang}
      />

      <PageTitle
        lang= {lang}/>

      <Description
        lang= {lang}/>

      <MainPage
        lang= {lang}/>

      <Footer
        lang= {lang}/>
      
    </Container>
    );
}

export default Home;