
import { Container, Typography, Button } from '@mui/material';
import Header from './Header'
import PageTitle from './PageTitle'
import MainPage from './MainPage'
import Footer from './Footer'
import Description from './Description'

function Home({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      textAlign= "center"
      >

      <Header/>

      <PageTitle/>

      <Description/>

      <MainPage/>

      <Footer/>
      
    </Container>
    );
}

export default Home;