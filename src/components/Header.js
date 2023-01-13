
import { Container, Typography, Button, Grid } from '@mui/material';
import { buttonTexts } from '../texts/texts.js'
import { lightPurple } from '../colours/colours.js';
import { useNavigate } from 'react-router-dom';


function Header({lang, setLang, matches}) {
  const navigate = useNavigate();

  const switchLanguage = () => {
    (lang === 'pt')?
    setLang('en'):
    setLang('pt');
  }

  const changePage = (e) => {
    navigate(`/${e.target.value}`);
  }

  /* if bigger screen: */
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
            {buttonTexts.mainTitle[lang]}
          </Typography>
        </Grid>
    
        <Grid item sm= {8} 
          sx= {{
            textAlign: "right",
            margin: "auto",
            padding: "30px 0"
          }}>
          {/* customer wanted this away
          <Button 
            sx= {{
              background: purple,
              color: "black",
              display: "block",
              right: "0",
              marginLeft: "auto",
              marginTop: "2px"
            }}
            value= 'contact'
            onClick= {changePage}
          >
            {buttonTexts.bookButton[lang]}
          </Button>
          */}  
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
            value= '/'
            onClick= {changePage}
          >
            {buttonTexts.menuButton1[lang]}
          </Button>
            
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
            value= 'faq'
            onClick= {changePage}
          >
            {buttonTexts.menuButton2[lang]}
          </Button>
          {/* BLOG NOT YET DONE 
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
            value= 'blog'
            onClick= {changePage}
          >
            {buttonTexts.menuButton3[lang]}
          </Button>
 */} 
          <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black"
            }}
            value= 'contact'
            onClick= {changePage}
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

    /* if smaller screen: */
    
    return(
      <Container 
        maxWidth = "100vw"      
        sx = {{
          background: "white",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "2",
          marginBottom: "5px"
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
          {/*  
          <Button 
            sx= {{
              background: purple,
              color: "black",
              marginTop: "2px"
            }}
            value= 'contact'
            onClick= {changePage}
          >
            {buttonTexts.bookButton[lang]}
          </Button>
          */}  
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
            value= '/'
            onClick= {changePage}
          >
            {buttonTexts.menuButton1[lang]}
          </Button>
            
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
            value= "faq"
            onClick= {changePage}
          >
            {buttonTexts.menuButton2[lang]}
          </Button>
            {/*  BLOG NOT YET DEVELOPED
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
            value= 'blog'
            onClick= {changePage}
          >
            {buttonTexts.menuButton3[lang]}
          </Button>
  */}
          <Button
            sx= {{
              marginTop: "2px",
              color: "black"
            }}
            value= 'contact'
            onClick= {changePage}
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