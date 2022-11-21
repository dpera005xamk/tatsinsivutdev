
import { Container, Typography, Button, Grid } from '@mui/material';



function Description({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      style = {{
        background: "gray",
        marginBottom: "20px",
        width: "80%"
      }}  
      >
      
      <Typography variant= "h6" style= {{textAlign: "center"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <p style= {{textAlign: "center"}}>tähän kuva</p>
   
    </Container>
    );
}

export default Description;