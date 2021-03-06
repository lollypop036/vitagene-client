import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

class Form extends Component {

  componentDidMount() {
     if (this.largeWindowSize) {document.getElementById("form").scrollIntoView({behavior: "smooth", block: "start"}) }
  }

  largeWindowSize = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    return width > 768 ? true : true
  }

   render() {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const {handleChange, handleSubmit} = this.props

    const content =  [{
      question: 'vegan?',
      label: 'vegan'
    },
    { question: 'of African descent?',
      label: 'african'
    },
    { question: 'pregnant or trying?',
      label: 'pregnant'
    }]

    const link = {
      color: 'orange',
      boxShadow: 'none',
      textTransform: 'none',
      display: 'inline block',
      padding: 0,
      margin: 0
    }

    const formLabelDesktop = {
    
      color: '#303f9f',
      letterSpacing: '5px',
      fontSize:'5rem',
      fontFamily: 'raleway',
    }

    const formLabelMobile = {
      color: '#303f9f',
      letterSpacing: '5px',
      textAlign: 'left',
      fontSize:'2rem',
      fontFamily: 'raleway'
      
    }

   const radiob = {
    color: '#fff',
    fontFamily: 'raleway'
    }

    const text = {
      color: 'rgba(252, 150, 88, 0.5)',
      fontFamily: 'raleway'
    }
      


    return (
      <Zoom in={true} style={{ transitionDelay: '200ms'}}>
        <div id="form" className="form">
          <p>A few optional questions to further personalize your results..
            <br />
            <br />
            <Button style={link} color="primary" onClick={handleSubmit}>skip</Button>
          </p>
          <h2>Are you...</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {content.map(question =>
              <div className="slider">
                <FormControl component="fieldset">
                  <FormLabel style={this.props.largeWindowSize ? formLabelDesktop : formLabelMobile} component="legend">{question.question}</FormLabel>
                  <RadioGroup
                  aria-label={question.label}
                  style={radiob}
                  name={question.label}
                  onChange={(event) => {handleChange(event);
                    this.slider.slickNext()}}>
                  <FormControlLabel  value="yes" control={<Radio style={text} />} className="MuiTypography-body1-89" label="Yes" />
                  <FormControlLabel style={radiob} value="no" control={<Radio style={text}/>} label="No" />
                  </RadioGroup>
              </FormControl>
              </div>
              )}
            </Slider> 
        </div>
       </Zoom>
     );
   }
 }

export default Form;
