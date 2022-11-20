
import { Container, Typography, Button } from '@mui/material';

function About({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      >

      <Typography variant = "h1">
                  
        Sivu alkaa tästä
              
      </Typography>

      <Typography>
                  
        about
              
      </Typography>

    </Container>
    );
}

export default About;