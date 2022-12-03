
import { Container, Typography, Box, ImageListItem } from '@mui/material';
import ownImage from '../img/ownpicture.webp';
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
  
            {/* if large screen, show the image */}
            {
              matches ?
              <Box  maxWidth = "30vw" marginLeft= "auto" marginRight= "auto">
              <ImageListItem>
                <img
                  src={ownImage}
                  alt='Tatiana'
                />
              </ImageListItem>
            </Box>:
            <></>
            }
  
     
      </Container>
      );
  } else {

    {/* small screen */}
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
  
            {/* if large screen, show the image */}
            {
              matches ?
              <Box  maxWidth = "30vw" marginLeft= "auto" marginRight= "auto">
              <ImageListItem>
                <img
                  src={ownImage}
                  alt='Tatiana'
                />
              </ImageListItem>
            </Box>:
            <></>
            }
  
     
      </Container>
      );
  }

}

export default Description;