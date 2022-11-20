
import { Container, Typography, Button } from '@mui/material';
import Header from './Header'

function Home({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      >

      <Header/>

      <Typography>
                  
        home
              
      </Typography>

    </Container>
    );
}

export default Home;