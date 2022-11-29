
import { Container, Typography, Box, ImageListItem } from '@mui/material';
import ownImage from '../img/ownpicture.webp';
import { mainTexts } from '../texts/texts.js';


function Description({lang}) {

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
          
          <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
            {mainTexts.mainTwo[lang]}
          </Typography>

          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {mainTexts.mainThree[lang]}
          </Typography> 

          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {mainTexts.mainFour[lang]}
          </Typography>

          <Box  maxWidth = "30vw" marginLeft= "auto" marginRight= "auto">
            <ImageListItem>
              <img
                src={ownImage}
                alt='Tatiana'
              />
            </ImageListItem>
          </Box>
   
    </Container>
    );
}

export default Description;