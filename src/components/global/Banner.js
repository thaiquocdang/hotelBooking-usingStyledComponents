import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { setFlex, setColor, setRem, setLetterSpacing, setBorder, media } from '../../styles'

const fadeIn = (start, point, end) => {
    const animation = keyframes`
        0%{
            opacity: 0;
            transform: translateY(${start})
        }
        50%{
            opacity: 0.5;
            transform: translateY(${point})
        }
        100%{
            opacity: 1;
            transform: translateY(${end})
        }
    `
    return css`animation: ${animation} 2s ease-in-out`;
};



function Banner({ className, title, text, greeting, children }) {
    return (
        <div className={className}>
            <h1>{greeting} <span>{title}</span></h1>
            <div className="banner-body">
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}

const BannerWrapper = styled(Banner)`
    color: ${setColor.mainWhite};
    background: rgba(0, 0, 0, 0.7);
    /* ${setFlex({direction: "column"})}; */
    text-align: center;
    padding: ${setRem(55)} ${setRem(25)};
    ${setLetterSpacing(2.5)};  /* setLetterSpacing */

    h1{
     text-transform: capitalize;
     font-size: ${setRem(50)};
     color: ${setColor.primaryColor};
     ${fadeIn("50%", "-10%", "0")};

     span{
        color: ${setColor.mainWhite}
     }
    }
    
    p {
        width: 85%;
        margin: 0 auto;
    }

    .banner-body{
        ${fadeIn("-50%", "10%", "0")};
    }

    ${media.tablet`
        width: 75vw;

        ${setBorder({width:"6px", style: "solid", color: setColor.primaryColor })};

        p {
            width: 75%;
        }
    `}
    ${media.large`
        max-width: 1170px;
        padding: ${setRem(55)} 0};

    `}

    h1{
       
    }

`
export default BannerWrapper;
