
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
        textAlign: "center"
      }}  
      >
      
      <Typography variant= "h5">
            {mainTexts.mainOne[lang]}
          </Typography>
          
          <Typography variant= "h3">
            {mainTexts.mainTwo[lang]}
          </Typography>

          <Typography variant= "h6">
            {mainTexts.mainThree[lang]}
          </Typography> 

          <Typography variant= "h6">
            {mainTexts.mainFour[lang]}
          </Typography>

          <Box  maxWidth = "30vw">
            <ImageListItem>
              <img
                src={ownImage}
                alt={'image of Tatiana'}
              />
            </ImageListItem>
          </Box>
   
    </Container>
    );
}

export default Description;