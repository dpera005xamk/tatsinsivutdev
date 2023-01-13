
import { Container, Typography, Grid, ImageListItem, Box } from '@mui/material';
import { footerTexts } from '../texts/texts.js';
import unionImg from '../img/Location-Independent-Therapists_Final-logo_LIT_Logo-Final_aqua_lr.png';
import linkedImg from '../img/In-Blue-48.png';

function Footer({ lang, matches }) {

  const showCursor = (e) => {
    e.target.style.cursor = 'pointer';
  }

  const goToPageUnion = (e) => {
    window.open('https://locationindependenttherapists.com/', '_blank');
  }
 
  const goToPageLi = (e) => {
    window.open('https://www.linkedin.com/in/tatiana-eboli/', '_blank');
  } 
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

            <Box width= "50%" sx= {{marginLeft: "auto", marginRight: "auto"}}>
                <ImageListItem>
                  <img
                    src={unionImg}
                    alt={'therapist union'}
                    sx= {{overflowY: "hidden"}}
                    onMouseEnter= {showCursor}
                    onClick= {goToPageUnion}
                  />
                </ImageListItem>
              </Box>
    
            </Grid>
       
            <Grid item xs={8}>
              <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                {footerTexts.contactText[lang]}: info(a)tatianaeboli.com
              </Typography>

              <Box maxWidth= "58px" sx= {{marginLeft: "auto", marginRight: "auto", padding: "20px"}}>
                <ImageListItem>
                  <img
                    src={linkedImg}
                    alt={'linked in of Tatiana Eboli'}
                    sx= {{overflowY: "hidden"}}
                    onMouseEnter= {showCursor}
                    onClick= {goToPageLi}
                  />
                </ImageListItem>
              </Box>

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
   
        <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
          {footerTexts.contactText[lang]}: info(a)tatianaeboli.com
        </Typography>         

        <Box maxWidth= "58px" sx= {{padding: "10px"}}>
          <ImageListItem>
            <img
              src={linkedImg}
              alt={'linked in of Tatiana Eboli'}
              sx= {{overflowY: "hidden"}}
              onMouseEnter= {showCursor}
              onClick= {goToPageLi}
            />
          </ImageListItem>
        </Box>

        <Typography variant= "h5" sx= {{fontFamily: "Forum", marginTop: "20px"}}>
          {footerTexts.memberText[lang]}
        </Typography>

        <Box width= "50%" sx= {{padding: "10px"}}>
          <ImageListItem>
            <img
              src={unionImg}
              alt={'therapist union'}
              sx= {{overflowY: "hidden"}}
              onMouseEnter= {showCursor}
              onClick= {goToPageUnion}
            />
          </ImageListItem>
        </Box>

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