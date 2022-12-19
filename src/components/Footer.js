
import { Container, Typography, Grid, ImageListItem, Box  } from '@mui/material';
import { footerTexts } from '../texts/texts.js';
import unionImg from '../img/Location-Independent-Therapists_Final-logo_LIT_Logo-Final_aqua_lr.png';
import { purple } from '../colours/colours.js';

function Footer({ lang, matches }) {
    /* if bigger screen: */
/*
export const footerTexts = {
    contactText: {en: "Contact me", pt: "Contate-me"},
    memberText: {en: "Member of ", pt: "Membra de "}
}
*/
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
              marginBottom: "20px",
              background: purple
              }}>
      
            <Grid item xs={8} sx= {{ background: purple }}>

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
    
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                {footerTexts.smallTitle[lang]}
              </Typography>
    
            </Grid>
      
            <Grid item xs={8}>
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                  {footerTexts.contactText[lang]}
                </Typography>
            </Grid>     

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
              marginBottom: "20px",
              background: purple
              }}>
      
            <Grid item xs={8} sx= {{ background: purple }}>

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
    
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                {footerTexts.smallTitle[lang]}
              </Typography>
    
            </Grid>
      
            <Grid item xs={8}>
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                  {footerTexts.contactText[lang]}
                </Typography>
            </Grid>     

          </Grid>
       
        </Container>
        ); 
    }
}

export default Footer;

/* old:

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
*/