
import { Container, Typography, Grid, ImageListItem, Box } from '@mui/material';
import flower from '../img/isokukka.webp';
import { titleTexts } from '../texts/texts.js';
import { purple } from '../colours/colours.js';

function PageTitle({lang, matches}) {

    {/* if bigger screen: */}

    if (matches) {
      return(
        <Container 
          maxWidth = "100vw" 
          sx = {{
            width: "80%",
            fontFamily: "Forum"
          }}  
          >
          <Grid 
            container 
            spacing={0} 
            columns={16} 
            textAlign= "center" 
            sx= {{
              display: 'flex', 
              alignItems: 'center',
              marginBottom: "20px",
              background: purple
              }}>
      
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
    } else {

      {/* if smaller screen: */}
      return(
        <Container
          sx= {{
            textAlign: "center", 
            alignItems: 'center',
            marginBottom: "20px",
            background: purple
          }}>

                <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
                  {titleTexts.titleOne[lang]}
                </Typography>
                
                <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
                  {titleTexts.titleTwo[lang]}
                </Typography>
      
                <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
                  {titleTexts.titleThree[lang]}
                </Typography> 
      
                <Typography variant= "h5" sx= {{fontFamily: "Forum"}}>
                  {titleTexts.smallTitle[lang]}
                </Typography>

        </Container>
      );
    }

}

export default PageTitle;

