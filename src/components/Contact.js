
import { contactTexts, contactFormUrl } from '../texts/texts.js';
import { Container, Typography } from '@mui/material';
import Header from './Header';

function Contact({ lang, setLang, matches}) {

  /* if big screen */
  if (matches) {
  
    return(
      <Container 
        maxWidth = "100vw" 
        sx = {{
          marginBottom: "20px",
          width: "80%",
          textAlign: "center",
          fontFamily: "Forum"
        }}  
        >
          <Header
            lang= {lang}
            matches= {matches}
            setLang = {setLang}
          />          
        
          <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
            {contactTexts.title[lang]}
          </Typography>

          <iframe title= "contactFormScreen" src={contactFormUrl[lang]} width="640" height="358" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

     
      </Container>
      );  

  } else {
    /* if small screen */

    return(
      <Container 
        maxWidth = "100vw" 
        sx = {{
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "Forum"
        }}  
        >

          <Header
            lang= {lang}
            matches= {matches}
            setLang = {setLang}
          />           
        
          <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
            {contactTexts.title[lang]}
          </Typography>

          <iframe title= "contactFormMobile" src={contactFormUrl[lang]} width="640" height="358" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

     
      </Container>
      );  

  }
}

export default Contact;
