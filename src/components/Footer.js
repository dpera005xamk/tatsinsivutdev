
import { Container, Typography, Grid, ImageListItem, Box  } from '@mui/material';
import { footerTexts } from '../texts/texts.js';
import unionImg from '../img/Location-Independent-Therapists_Final-logo_LIT_Logo-Final_aqua_lr.png';

function Footer({ lang, matches }) {
    /* if bigger screen: */

    if (matches) {
      return(
        <Container 
          maxWidth = "100vw"
          sx = {{
            width: "80%",
            fontFamily: "Forum"
          }}  
          >
          <Grid 
            container 
            spacing={0} 
            columns={16} 
            textAlign= "center" 
            sx= {{
              display: 'flex', 
              alignItems: 'center',
              marginBottom: "20px"
              }}>
      
            <Grid item xs={8} >

            <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                {footerTexts.memberText[lang]}
              </Typography>

            <Box>
                <ImageListItem >
                  <img
                    src={unionImg}
                    alt={'therapist union'}
                    sx= {{overflowY: "hidden"}}
                  />
                </ImageListItem>
              </Box>
    
            </Grid>
      {/* 
            <Grid item xs={8}>
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                  {footerTexts.contactText[lang]}
                </Typography>
            </Grid>     
      */}
          </Grid>
       
        </Container>
      );    
    } else {

      /* if smaller screen: */
      
      return(
        <Container 
          maxWidth = "100vw"
          sx = {{
            width: "80%",
            fontFamily: "Forum"
          }}  
        >
          <Grid 
            container 
            spacing={0} 
            columns={16} 
            textAlign= "center" 
            sx= {{
              display: 'flex', 
              alignItems: 'center',
              marginBottom: "20px"
            }}>
        
          <Grid item xs={8} >
  
            <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
              {footerTexts.memberText[lang]}
            </Typography>
  
            <Box>
              <ImageListItem >
                <img
                  src={unionImg}
                  alt={'therapist union'}
                  sx= {{overflowY: "hidden"}}
                />
              </ImageListItem>
            </Box>
      
          </Grid>
        {/*
          <Grid item xs={8}>
            <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
              {footerTexts.contactText[lang]}
            </Typography>
          </Grid>     
          */}    
        </Grid>
         
      </Container>
    );  
  }
}

export default Footer;

/*

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

  /*
export const footerTexts = {
    contactText: {en: "Contact me", pt: "Contate-me"},
    memberText: {en: "Member of ", pt: "Membra de "}
}
*/