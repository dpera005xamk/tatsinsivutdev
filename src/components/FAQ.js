
import { Button, Container, Typography } from '@mui/material';
import { faqTexts } from '../texts/texts.js';
import { purple2, lightPurple, lighterPurple } from '../colours/colours.js';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const fontAndPadding = {
  fontFamily: "Forum",
  paddingLeft: "40px",
  paddingRight: "40px",
  marginTop: "15px" 
}

const minHeightAndPadding = {
  minHeight: "300px",
  padding: "20px"
}

function FAQ({lang, matches, setLang}) {
  const navigate = useNavigate();

  const changePage = (e) => {
    window.scrollTo(0, 0);
    navigate(`/${e.target.value}`);
  }

  if (matches) {

    /* if big screen */

    return(
        <Container 
        maxWidth = "100vw" 
        sx = {{
          marginBottom: "20px",
          width: "60%",
          textAlign: "center",
          fontFamily: "Forum"
        }}  
        >

          <Header
            lang= {lang}
            matches= {matches}
            setLang = {setLang}
          />
          
          <Typography variant= "h4" sx= {{fontFamily: "Forum", margin: "20px"}}>
              FAQ
            </Typography>

          <Container sx= {{ background: lightPurple, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleOne[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descOne[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lighterPurple, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleTwo[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descTwo[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: purple2, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleThree[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descThree[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lightPurple, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleFour[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descFour[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lighterPurple, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleFive[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descFive[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: purple2, marginBottom: "20px", ...minHeightAndPadding }}>

            <Typography variant= "h4" sx= {fontAndPadding}>
              {faqTexts.titleSix[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {fontAndPadding}>
              {faqTexts.descSix[lang]}
            </Typography>

          </Container>           

          <Button
            sx= {{
              background: purple2,
              color: "black",
              fontWeight: "bold"
            }}
            value= 'contact'
            onClick= {changePage}
          >
            {faqTexts.buttonTitle[lang]}
          </Button>
       
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
        
        <Typography variant= "h4" sx= {{fontFamily: "Forum", margin: "20px"}}>
            FAQ
          </Typography>

        <Container sx= {{ background: lightPurple, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleOne[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descOne[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lighterPurple, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleTwo[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descTwo[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: purple2, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleThree[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descThree[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lightPurple, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleFour[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descFour[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lighterPurple, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleFive[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descFive[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: purple2, marginBottom: "20px", ...minHeightAndPadding }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleSix[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {fontAndPadding}>
            {faqTexts.descSix[lang]}
          </Typography>

        </Container>          
  
        <Button
            sx= {{
              background: purple2,
              color: "black"
            }}
            value= 'contact'
            onClick= {changePage}
          >
            {faqTexts.buttonTitle[lang]}
          </Button>

      </Container>
      );
  }

}

export default FAQ;