import React, { Component } from "react";
import FlipCard from "./Components/flipcard";
import styled from "styled-components";
import brand from "./Components/Images/brand.png";
import branding from "./Components/Images/branding.png";
import business from "./Components/Images/business.jpg";
import machinelearning from "./Components/Images/machinelearning.png";
import marketing from "./Components/Images/marketing.png";
import website from "./Components/Images/website.png";

const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

class App extends Component {
  render() {
    let parameters = {
      card1: {
        heading: "Investment Branding",
        backFirst: "To Do",
        backSecond: "Investment Branding Documents",
        padding: "0.5rem 1rem",
        img: { branding },
        backimg: "linear-gradient(to right bottom,#126838,#0b502a)",
        headimg:
          "linear-gradient(to right bottom,rgba(18,104,56,.85),rgba(11,80,42,.85))",
        content:
          "Investment Branding is a set of professional documents which articulates a well-researched business opportunity and arational plan towards the achievement of scale"
      },
      card2: {
        heading: "Machine Learning POCs",
        backFirst: "To Build",
        backSecond: "Machine Learning Prototypes",
        padding: "0.5rem 0.9rem",
        img: { machinelearning },
        backimg: "linear-gradient(to right bottom,#126838,#0b502a)",
        headimg:
          "linear-gradient(to right bottom,rgba(18,104,56,.85),rgba(11,80,42,.85))",
        content:
          "Machine Learning Proof-of-Concepts are custom-built prototype applications which demonstrate and measure the scope of automation and AI for your business"
      },
      card3: {
        heading: "Digital Content Marketing",
        backFirst: "To Do",
        backSecond: "Digital Content Marketing",
        padding: "0.5rem 0.9rem",
        img: { marketing },
        backimg: "linear-gradient(to right bottom,#126838,#0b502a)",
        headimg:
          "linear-gradient(to right bottom,rgba(18,104,56,.85),rgba(11,80,42,.85))",
        content:
          "Digital Content Marketing is a set of social and digital activities which ensures sustained relevance in the digital community with minimal budgets"
      },
      card4: {
        heading: "Product and Customer Research",
        backFirst: "To Do",
        backSecond: "Product and Customer Research",
        padding: "0.5rem 1rem",
        img: { brand },
        backimg: "linear-gradient(to right bottom,#2998ff,#5643fa)",
        headimg:
          "linear-gradient(to right bottom,rgba(41,152,255,.85),rgba(86,67,250,.85))",
        content:
          "Product and Customer Research is a set of processes that ensures maximum customer revenue with minimum developers and salespersons through evaluation of ROI impact"
      },
      card5: {
        heading: "Business Intelligence & Process Automation Tools",
        backFirst: "To Build",
        backSecond: "Business Intelligence & Process Automation Tools",
        padding: "0.4rem 0.2rem",
        img: { business },
        backimg: "linear-gradient(to right bottom,#2998ff,#5643fa)",
        headimg:
          "linear-gradient(to right bottom,rgba(41,152,255,.85),rgba(86,67,250,.85))",
        content:
          "Business Intelligence &amp; Process Automation Tools provide automation and optimization technology to seamlessly integrate business operations for efficiency"
      },
      card6: {
        heading: "E-Commerce Store, Webapps & Mobile Apps",
        backFirst: "To Do",
        backSecond: "E-Commerce Store, Webapps & Mobile Apps",
        padding: "0.5rem 1rem",
        img: { website },
        backimg: "linear-gradient(to right bottom,#2998ff,#5643fa)",
        headimg:
          "linear-gradient(to right bottom,rgba(41,152,255,.85),rgba(86,67,250,.85))",
        content:
          "E-Commerce Store, Web Apps &amp; MobileApps are ways to have a global marketplace for branding, marketing and one-click sales setup for all kinds of business offerings."
      }
    };

    return (
      <Cards>
        <FlipCard parameters={parameters.card1} />
        <FlipCard parameters={parameters.card2} />
        <FlipCard parameters={parameters.card3} />
        <FlipCard parameters={parameters.card4} />
        <FlipCard parameters={parameters.card5} />
        <FlipCard parameters={parameters.card6} />
      </Cards>
    );
  }
}

export default App;
