
import { Container, Typography, Box, ImageListItem } from '@mui/material';
import ownImage from '../img/imageCircular.jpg';
import { mainTexts } from '../texts/texts.js';


function Description({ lang, matches }) {

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
        
            <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainOne[lang]}
            </Typography>
            
            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainTwo[lang]}
            </Typography>
  
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainThree[lang]}
            </Typography> 
  
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainFour[lang]}
            </Typography>
  
            <Box  
              maxWidth = "30vw" 
              marginLeft= "auto" 
              marginRight= "auto"
              marginTop= "30px">
              <ImageListItem>
                <img
                  src={ownImage}
                  alt='Tatiana'
                />
              </ImageListItem>
            </Box>
            
      </Container>
      );
  } else {

    /* small screen */
    return(
      <Container 
        maxWidth = "100vw" 
        sx = {{
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "Forum"
        }}  
        >
        
            <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainOne[lang]}
            </Typography>
            
            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainTwo[lang]}
            </Typography>
  
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainThree[lang]}
            </Typography> 
  
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {mainTexts.mainFour[lang]}
            </Typography>
     
      </Container>
      );
  }

}

export default Description;