
import { Container, Typography, Button, Grid } from '@mui/material';



function PageTitle({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw" 
      style = {{
        background: "gray",
        marginBottom: "20px",
        width: "80%"
      }}  
      >
      <Grid container spacing={2} columns={16} textAlign= "center">
  
        <Grid item xs={8}>
          <Typography variant= "h3">
            Tässä oli jotain vähän isommalla
          
          </Typography>
          <Typography variant= "h3">
            Tässä oli jotain vähän isommalla
          </Typography>

          <Typography variant= "h3">
            Tässä oli jotain vähän isommalla
          </Typography> 

          <Typography variant= "h5">
            Tässä oli jotain pienemmällä fontilla
          </Typography>

        </Grid>
  
        <Grid item xs={8}>
          <Typography>kuva tähän</Typography>
        </Grid>
      
      </Grid>
   
    </Container>
    );
}

export default PageTitle;