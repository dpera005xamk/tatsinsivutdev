
import { Container, Typography, Button, Grid } from '@mui/material';



function Header({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      >
      <Grid container spacing={2} columns={16} textAlign= "center">
  
        <Grid item xs={8}>
          <Typography variant= "h6">
            Tatiana Eboli - Developmental and Social Psychologist
          </Typography>
        </Grid>
  
        <Grid item xs={8}>
          <Typography>menu tähän</Typography>
        </Grid>
      
      </Grid>
   
    </Container>
    );
}

export default Header;