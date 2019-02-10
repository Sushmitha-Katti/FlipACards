import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

/*------------------STYLED COMPONENTS------------*/

/*WRAPPER CLASS*/

const FlipCardWrapper = styled.div.attrs(({ padding, bg, headimg }) => ({
  padding: padding,
  bg: bg,
  headimg: headimg
}))`{
  background:#ccc;
  padding: 50px;
  font-family: "Nunito", sans-serif;
  .flip-card {
    background-color: transparent;
    width: 340px;
    height: 520px;
    perspective: 150rem;
    -moz-perspective: 150rem;
    border-radius: 3%;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  @media only screen and (min-width:56.25em) {
    .flip-card:hover .flip-card-inner {   /*For Flipping Card while Hovered */
      transform: rotateY(-180deg);
    }
  }
  .flip-card-front,   /* General character for both faces of card*/
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-front {        /*Front face */
    background-color: white;
    
    z-index: 1;
    img {                /*image of card */
      background-size: cover;
      width: 100%;
      height: 50%;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      opacity: 0.7;
    }
    .card-details {
      list-style: none;
      width: 80%;
      margin: 0 0;
      font-size: 1.1rem;
      display: block;
      position: relative;
      opadding-inline-start: 20px;
      line-height : 1.7
      ul { 
        color:#777;
        font-weight:200;
      }
   }
   .card-heading{  /* for card heading  style*/
    font-size: 1.5rem;
    font-weight: 100;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 7.5rem;
    right: 1.2rem;
    width: 75%;
    span{   /* card heading background and text */
      background-image: ${props => props.headimg};
      padding: ${props => props.padding};
      
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      
    
    }
  }
  }  /* End Of Front face*/
  .flip-card-back {                       /*BACK FACE */
    background-image: ${props => props.bg};
    color: white;
    text-align: center;
    transform: rotateY(-180deg);
    z-index: 1;
    margin:0 auto;
    position: relative;


    .back-card-details{   /* Back Card Details including Button and text */
      position:absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      width: 90%;
      text-align: center
      .about{        /* Back Card --- Only Text*/
        text-align: center;
        color: #fff;
        margin-bottom: 5.5rem;
        .about-general {  /*First Line Of Card */
          font-size: 1rem;
          text-transform: uppercase;
          margin: 0
        }
        .about-specific { /* Second Line Of Card */
          font-size: 2.8rem;
          line-height: 2.5rem;
          font-weight: 50;
          margin: 0px;
        
        }
      }
    }
  }
}
}

@media only screen and (max-width:56.25em){

  .flip-card {
    height: 28rem;
    width: 22.5rem;    
  }
  .flip-card-inner {
    
    position: relative;
    box-shadow: none;
  }
  .flip-card-front img {
    height: 50%;
    
  }
  .flip-card-front .card-heading {
    
    top: 1rem;

    span {  
      font-size: 1.2rem;
    }
  }
  .card-details {
    padding: 0.1rem;

    ul{
      font-size: 0.9rem;
    }
 }
 
   .flip-card-back {
     top:85%;
     height:15%;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    webkit-clip-path: polygon(0 15%,100% 0,100% 100%,0 100%);

    clip-path: polygon(0 15%,100% 0,100% 100%,0 100%);
    

}
.flip-card-back .back-card-details {
  top:20%;
  left: 30%;
}

.about {
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  padding: 2rem
}
.about-general, .about-specific  {
  display : none;
}

 
}



}
`;

const buttonani = keyframes` {


  0% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
   box-shadow: 0 0 0 0rem rgba(255, 255, 255, 0.7); 
  }
  
  100% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
   box-shadow: 0 0 0 2.5rem rgba(255, 255, 255, 0); 
  }

}
 
 
 `;
const afterbutton = keyframes` {
  0% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
    box-shadow: 0 0 0 2.5rem rgba(255,255, 255, 0); 
   
  }
  
  100% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
    box-shadow: 0 0 0 0rem rgba( 255,255, 255, 0.8); 
   
  }
 }
 
 
 `;

/* Tell Me More Button*/

const Button = styled.div`
  background: white; 
  text-transform: uppercase;
  
  padding: 1.2rem 2rem;
  display: inline-block;
  border-radius: 12rem;
  position: relative;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0.3rem;
  a{
    color: #777;
    text-decoration: none;
    
  }
  :hover {
    animation: ${buttonani} 0.2s linear forwards;
    -webkit-animation-fill-mode: forwards; 
    -moz-animation-fill-mode: forwards;    
    animation-fill-mode: forwards;      
  }
  animation: ${afterbutton} 0.2s ease-in forwards;
   
}
@media only screen and (max-width:56.25em) {
  padding: 0.6rem 1.2rem;
  font-size:0.9rem;
  top:1.3rem;
  left:4.5rem;;
}
  
`;

class FlipCard extends Component {
  render() {
    return (
      <div>
        <FlipCardWrapper
          padding={this.props.parameters.padding}
          bg={this.props.parameters.backimg}
          headimg={this.props.parameters.headimg}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Object.values(this.props.parameters.img).toString()}
                  alt="Avatar"
                />
                <h4 className="card-heading">
                  <span>{this.props.parameters.heading} </span>
                </h4>
                <div className="card-details">
                  <ul>{this.props.parameters.content}</ul>
                </div>
              </div>

              <div className="flip-card-back">
                <div className="back-card-details">
                  <div className="about">
                    <p className="about-general">
                      {this.props.parameters.backFirst}
                    </p>
                    <p className="about-specific">
                      {this.props.parameters.backSecond}
                    </p>
                  </div>
                  <Button>
                    <a>Tell Me More</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FlipCardWrapper>
      </div>
    );
  }
}

export default FlipCard;
