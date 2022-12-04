
import { Button, Container, Typography } from '@mui/material';
import { faqTexts } from '../texts/texts.js';
import { purple, lightPurple, lighterPurple } from '../colours/colours.js';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function FAQ({lang, matches, setLang}) {
  const navigate = useNavigate();

  const changePage = (e) => {
    window.scrollTo(0, 0);
    navigate(`/${e.target.value}`);
  }

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
          
          <Typography variant= "h4" sx= {{fontFamily: "Forum", margin: "20px"}}>
              FAQ
            </Typography>

          <Container sx= {{ background: lighterPurple, marginBottom: "20px" }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleOne[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descOne[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lightPurple, marginBottom: "20px"  }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleTwo[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descTwo[lang]}
            </Typography>

          </Container>

          <Container sx= {{ marginBottom: "20px"  }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleThree[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descThree[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lighterPurple, marginBottom: "20px"  }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleFour[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descFour[lang]}
            </Typography>

          </Container>

          <Container sx= {{ background: lightPurple, marginBottom: "20px"  }}>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleFive[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descFive[lang]}
            </Typography>

          </Container>

          <Container>

            <Typography variant= "h4" sx= {{fontFamily: "Forum"}}>
              {faqTexts.titleSix[lang]}
            </Typography>
                
            <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
              {faqTexts.descSix[lang]}
            </Typography>

          </Container>           

          <Button
            sx= {{
              background: purple,
              color: "black"
            }}
            value= 'contact'
            onClick= {changePage}
          >
            {faqTexts.buttonTitle[lang]}
          </Button>
       
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
        
        <Typography variant= "h4" sx= {{fontFamily: "Forum", margin: "20px"}}>
            FAQ
          </Typography>

        <Container sx= {{ background: lighterPurple, marginBottom: "20px" }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleOne[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descOne[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lightPurple, marginBottom: "20px"  }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleTwo[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descTwo[lang]}
          </Typography>

        </Container>

        <Container sx= {{ marginBottom: "20px"  }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleThree[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descThree[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lighterPurple, marginBottom: "20px"  }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleFour[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descFour[lang]}
          </Typography>

        </Container>

        <Container sx= {{ background: lightPurple, marginBottom: "20px"  }}>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleFive[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descFive[lang]}
          </Typography>

        </Container>

        <Container>

          <Typography variant= "h5" sx= {{fontFamily: "Forum", fontWeight: "bold"}}>
            {faqTexts.titleSix[lang]}
          </Typography>
              
          <Typography variant= "h6" sx= {{fontFamily: "Forum"}}>
            {faqTexts.descSix[lang]}
          </Typography>

        </Container>          
  
        <Button
            sx= {{
              background: purple,
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