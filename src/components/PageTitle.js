
import { Container, Typography, Grid, ImageListItem, Box } from '@mui/material';
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
        width: "80%",
        fontFamily: "Forum"
      }}  
      >
      <Grid container spacing={0} columns={16} textAlign= "center" sx= {{display: 'flex', alignItems: 'center'}}>
  
        <Grid item xs={8} sx= {{ background: purple}}>
          
          <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
            {titleTexts.titleOne[lang]}
          </Typography>
          
          <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
            {titleTexts.titleTwo[lang]}
          </Typography>

          <Typography variant= "h3" sx= {{fontFamily: "Forum"}}>
            {titleTexts.titleThree[lang]}
          </Typography> 

          <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
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

