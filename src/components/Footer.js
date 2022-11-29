
import { Container, Typography } from '@mui/material';



function Footer({lang}) {


  return(
    <Container 
      maxWidth = "100vw"
      style = {{
        marginBottom: "20px",
        width: "80%",
        fontFamily: "Forum"
      }}  
      >
      
      <Typography variant= "h7" sx= {{textAlign: "center"}}>
        © 2023 by Tatiana Eboli.      
      </Typography>

   
    </Container>
    );
}

export default Footer;