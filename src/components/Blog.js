
import { Container, Typography, Button } from '@mui/material';

function Blog({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      >

      <Typography variant = "h1">
                  
        Sivu alkaa tästä
              
      </Typography>

      <Typography>
                  
        blog
              
      </Typography>

    </Container>
    );
}

export default Blog;