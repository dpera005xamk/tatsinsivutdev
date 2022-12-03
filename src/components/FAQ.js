
import { Container, Typography } from '@mui/material';
import { faqTexts } from '../texts/texts.js';
import { purple, lightPurple, lighterPurple } from '../colours/colours.js';

function FAQ({lang, matches}) {

  console.log('faq, lang, matches: ', lang, matches);

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
          
          <Container sx= {{ background: purple }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleOne[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descOne[lang]}
            </Typography>
 

          </Container>
    
       
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
        
        <Container sx= {{ background: purple }}>

<Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
  {faqTexts.titleOne[lang]}d
</Typography>
    
<Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
  {faqTexts.descOne[lang]}
</Typography>


</Container>

    
        </Container>
        );
  }


}

export default FAQ;