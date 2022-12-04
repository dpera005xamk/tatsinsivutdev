
import { contactTexts } from '../texts/texts.js';
import { Container, Typography, Button } from '@mui/material';
import Header from './Header';

function Contact({ lang, setLang, matches}) {

  if (matches) {
    {/* if big screen */}

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

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6oJhFC_3djqWsUL4UolbG5ZyHsyCH3EpAi7GHlWmMxjfcmA/viewform?embedded=true" width="640" height="358" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

     
      </Container>
      );  

  } else {
    {/* if small screen */}

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

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6oJhFC_3djqWsUL4UolbG5ZyHsyCH3EpAi7GHlWmMxjfcmA/viewform?embedded=true" width="640" height="358" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

     
      </Container>
      );  

  }
}

export default Contact;
