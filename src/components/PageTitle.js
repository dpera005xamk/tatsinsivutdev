
import { Container, Typography, Grid, ImageList, ImageListItem, Box } from '@mui/material';
import flower from '../img/isokukka.webp';
import { titleTexts } from '../texts/texts.js';
import { purple } from '../colours/colours.js';

function PageTitle({lang}) {


  return(
    <Container 
      maxWidth = "100vw" 
      sx = {{
        background: purple,
        marginBottom: "20px",
        width: "80%"
      }}  
      >
      <Grid container spacing={0} columns={16} textAlign= "center" sx= {{display: 'flex', alignItems: 'center'}}>
  
        <Grid item xs={8} sx= {{ background: purple}}>
          
          <Typography variant= "h3">
            {titleTexts.titleOne[lang]}
          </Typography>
          
          <Typography variant= "h3">
            {titleTexts.titleTwo[lang]}
          </Typography>

          <Typography variant= "h3">
            {titleTexts.titleThree[lang]}
          </Typography> 

          <Typography variant= "h5">
            {titleTexts.smallTitle[lang]}
          </Typography>

        </Grid>
  
        <Grid item xs={8}>
          <Box>
            <ImageListItem >
              <img
                src={flower}
                alt={'big flower'}
                sx= {{overflowY: "hidden"}}
              />
            </ImageListItem>
          </Box>
        </Grid>
      
      </Grid>
   
    </Container>
    );
}

export default PageTitle;

