import React from "react";
import styled from "styled-components";
import { Section } from "../global/Section";
import Title from "../global/Title";
import infinityPool from "../../images/infinityPool.jpg";
import { PrimaryButton } from "../global/Button";
import { setRem, setFlex, setBorder, setColor, setFont, setLetterSpacing, media} from '../../styles'


function About() {
  return (
    <Section background={setColor.mainWhite}>
      <AboutCenter>
        <div className="about-img">
          <img src={infinityPool} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="About Us" center />
          <p>
            Our hotel offers everything you and your family needs for a restful
            stay in Danang, including a spa and the Signature Sheraton Sleep
            Experience. From Vietnamese delicacies and international favorites
            to fresh seafood, beach dining and a whiskey bar, our resort
            restaurants are sure to delight.
          </p>
          <PrimaryButton>read more</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  );
}

const AboutCenter = styled.div`
    .about-img, .about-info {
        padding: ${setRem(30)};
    }

    .about-img {
        img {
            width:100%;
            display: block;
            ${setBorder({width:setRem(4), color: setColor.primaryColor })};
        }
    }

    .about-info {
        p {
            ${setLetterSpacing()}
        }
    }

    width: 90vw;
    margin: 0 auto;

    ${ media.large`
        width: 100vw;
        max-width: 1170px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${setRem(32)};
        .about-img, .about-info {
        padding: ${setRem(0)};
    }

        .about-img, .about-info {
            align-self: center;

            img{
                ${setBorder({width:setRem(6), color: setColor.primaryColor })};
            }
        }

        .about-info {
        p {
            width: 80%;
        }
    }
    `}
`;

export default About;
    // img{
    //     width: 80%;
    //     margin: 0 ${setRem(64)} 0 ${setRem(64)} ;
    //     
    // }
    // p {
    //     ${setFont.main};
    //     
    // }
    // ${setFlex({direction: "row", x: "space-between"})}
