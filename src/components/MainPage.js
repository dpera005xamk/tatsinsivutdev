
import { Container, Typography, Button, Grid } from '@mui/material';



function MainPage({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"
      style = {{
        background: "gray",
        marginBottom: "20px",
        marginTop: "50px",
        width: "80%",
        textAlign: "center"
      }}  
      >
      <Grid container justifyContent="center" spacing={2} columns={12}>
  
        <Grid item xs={4}>
          <Typography variant= "h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
  
        <Grid item xs={4}>
          <Typography variant= "h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant= "h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
        </Grid>      
      </Grid>
   
    </Container>
    );
}

export default MainPage;