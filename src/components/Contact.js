
import { contactFormUrl } from '../texts/texts.js';
import { Container } from '@mui/material';
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
        
          <iframe 
            title= "contactFormScreen" 
            src={contactFormUrl[lang]} 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            style= {{
              width: "100%",
              height: "100vh"
            }}
            >Loading…</iframe>

     
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

          <iframe 
            title= "contactFormMobile" 
            src={contactFormUrl[lang]} 
            style= {{
              width: "100%",
              height: "100vh"
            }}
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">Loading…</iframe>

     
      </Container>
      );  

  }
}

export default Contact;
