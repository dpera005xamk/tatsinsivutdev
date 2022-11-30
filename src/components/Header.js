
import { Container, Typography, Button, Grid } from '@mui/material';
import { buttonTexts } from '../texts/texts.js'
import { purple, lightPurple } from '../colours/colours.js';

function Header({lang, setLang, matches}) {

  const switchLanguage = () => {
    console.log('click');
    (lang === 'pt')?
    setLang('en'):
    setLang('pt');

  }

  
  {/* if bigger screen: */}
  if (matches) {
    return(
      <Container 
        maxWidth = "100vw"      
        sx = {{
          background: "white",
          position: "sticky",
          width: "80%",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "2"
        }}  
      >
  
      <Grid container spacing={2} columns={16} textAlign= "center">
        
        <Grid item sm={8}>
          <Typography 
            variant= "h6"
            sx = {{
              margin: "auto",
              padding: "30px 0",
              fontFamily: "Forum"
            }}>
            Tatiana Eboli - Developmental and Social Psychologist
          </Typography>
        </Grid>
    
        <Grid item sm= {8} sx= {{textAlign: "right"}}>
          <Button 
            sx= {{
              background: purple,
              color: "black",
              display: "block",
              right: "0",
              marginLeft: "auto",
              marginTop: "2px"
            }}
          >
            {buttonTexts.bookButton[lang]}
          </Button>
  
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton1[lang]}
          </Button>
            
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton2[lang]}
          </Button>
  
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton3[lang]}
          </Button>
  
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton4[lang]}
          </Button>
  
          <Button
            sx= {{
              float: "right bottom",
              background: lightPurple,
              marginTop: "2px",
              color: "black"
            }}
            onClick= {switchLanguage}
          >
            {
            (lang === 'en')?
              'portuguese':
              'english'
            }
          </Button>
  
          </Grid>
        
        </Grid>
     
      </Container>
      )
  } else {

    {/* if smaller screen: */}
    
    return(
      <Container 
        maxWidth = "100vw"      
        sx = {{
          background: "white",
          width: "80%",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "2"
        }}  
      >
  
      <Grid container spacing={2} columns={16} textAlign= "center">
        
        <Grid item sm={16}>
          <Typography 
            variant= "h6"
            sx = {{
              fontFamily: "Forum"
            }}>
            Tatiana Eboli - Developmental and Social Psychologist
          </Typography>
        </Grid>
    
        <Grid item sm= {16} sx= {{textAlign: "right"}}>

          <Button 
            sx= {{
              background: purple,
              color: "black",
              marginTop: "2px"
            }}
          >
            {buttonTexts.bookButton[lang]}
          </Button>
  
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton1[lang]}
          </Button>
            
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton2[lang]}
          </Button>
  
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton3[lang]}
          </Button>
  
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
          >
            {buttonTexts.menuButton4[lang]}
          </Button>
  
          <Button
            sx= {{
              background: lightPurple,
              marginTop: "2px",
              color: "black"
            }}
            onClick= {switchLanguage}
          >
            {
            (lang === 'en')?
              'portuguese':
              'english'
            }
          </Button>
  
          </Grid>
        
        </Grid>
     
      </Container>
      )    
  }


}

export default Header;