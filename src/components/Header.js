
import { Container, Typography, Button, Grid } from '@mui/material';
import { buttonTexts } from '../texts/texts.js'

const inLine = {display: "inline-block"}

function Header({gameObject, setGameObject, setMessage}) {


  return(
    <Container 
      maxWidth = "100vw"      
      style = {{
        background: "white",
        position: "fixed",
        width: "80%",
        left: "0",
        right: "0",
        top: "0"
      }}  
      >

      <Grid container spacing={2} columns={16} textAlign= "center">
  
        <Grid item xs={8}>
          <Typography 
            variant= "h6"
            style = {{
              margin: "auto",
              padding: "30px 0"
            }}>
            Tatiana Eboli - Developmental and Social Psychologist
          </Typography>
        </Grid>
  
        <Grid item xs={8}>
          <Button 
            style= {{
              display: "block",
              right: "0",
              marginLeft: "auto"}}
          >
            {buttonTexts.bookButton.en}
          </Button>

          <Button
                style= {{float: "right bottom"}}
              >
                {buttonTexts.menuButton1.en}
              </Button>
          <Button
                style= {{float: "right", float: "bottom"}}
              >
                {buttonTexts.menuButton2.en}
              </Button>
              <Button
                style= {{float: "right"}}
              >
                {buttonTexts.menuButton3.en}
              </Button>
              <Button
                style= {{
                  position: "fixed",
                  right: "0",
                  bottom: "0",
                  padding: "20"
                }}
              >
                {buttonTexts.menuButton4.en}
              </Button>

        </Grid>
      
      </Grid>
   
    </Container>
    );
}

export default Header;