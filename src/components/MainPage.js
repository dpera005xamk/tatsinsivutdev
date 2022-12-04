
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import { purple, lightPurple, lighterPurple } from '../colours/colours.js';
import { tripleTexts } from '../texts/texts.js';

function MainPage({ lang, matches }) {
  const navigate = useNavigate();

  const changePage = (e) => {
    window.scrollTo(0, 0);
    navigate(`/${e.target.value}`);
  }

  if (matches) {
    return(
      <Container 
        maxWidth = "100vw"
        sx = {{
          marginBottom: "20px",
          marginTop: "50px",
          width: "80%",
          textAlign: "center"
        }}  
        >
  
        <Grid container justifyContent="center" spacing={2} columns={12}>
    
          <Grid item xs={4} sx= {{background: lightPurple}}>
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              01.          
            </Typography>
            <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.titleOne[lang]}        
            </Typography>   
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.descOne[lang]}        
            </Typography>                    
          </Grid>
    
          <Grid item xs={4} sx= {{background: lighterPurple}}>
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              02.
            </Typography>
            <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.titleTwo[lang]}        
            </Typography>   
            <Typography variant= "h6">
              {tripleTexts.descTwo[lang]}        
            </Typography>   
            <Button
            sx= {{
              float: "right bottom",
              marginTop: "2px",
              color: "black",
              background: purple
            }}
            value= 'faq'
            onClick= {changePage}
          >
            {tripleTexts.button[lang]}
          </Button>        
          </Grid>
  
          <Grid item xs={4} sx= {{background: purple}}>
            <Typography variant= "h6">
              03.
            </Typography>
            <Typography variant= "h3">
              {tripleTexts.titleThree[lang]}        
            </Typography>   
            <Typography variant= "h6">
              {tripleTexts.descThree[lang]}        
            </Typography>           
          </Grid>      
        </Grid>
     
      </Container>
      );
  } else {

    {/* small screen: */}

    return(
      <Container 
      maxWidth = "100vw"
      sx = {{
        marginBottom: "20px",
        marginTop: "50px",
        textAlign: "center"
      }}  
      >

        <Grid container justifyContent="center" spacing={2} columns={1}>

          <Grid item xs={1} sx= {{background: lightPurple}}>
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              01.          
            </Typography>
            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.titleOne[lang]}        
            </Typography>   
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.descOne[lang]}        
            </Typography>                    
          </Grid>

          <Grid item xs={1} sx= {{background: lighterPurple}}>
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              02.
            </Typography>
            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {tripleTexts.titleTwo[lang]}        
            </Typography>   
            <Typography variant= "h6">
              {tripleTexts.descTwo[lang]}        
            </Typography>         
          </Grid>

          <Grid item xs={1} sx= {{background: purple}}>
            <Typography variant= "h6">
              03.
            </Typography>
            <Typography variant= "h4">
              {tripleTexts.titleThree[lang]}        
            </Typography>   
            <Typography variant= "h6">
              {tripleTexts.descThree[lang]}        
            </Typography>           
          </Grid>      
        </Grid>
    
      </Container>
    );
  }
}

export default MainPage;