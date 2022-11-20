
import { Container, Typography, Button } from '@mui/material';

function Contact({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      >

      <Typography variant = "h1">
                  
        Sivu alkaa tästä
              
      </Typography>

      <Typography>
                  
        contact
              
      </Typography>

    </Container>
    );
}

export default Contact;