import styled from 'styled-components'
import { setColor, setRem, setLetterSpacing, setFont, setBorder, setTransition} from '../../styles'

export const PrimaryButton = styled.button`
    display: inline-block;
    background: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    text-transform: capitalize; 
    ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
    ${setLetterSpacing(2.5)};
    font-size: ${setRem(18)};
    ${setFont.main};
    padding: ${setRem(15)} ${setRem(25)};
    cursor: pointer;
    ${setBorder({width: "5px", style:"solid", color: setColor.primaryColor })};
    text-decoration:none;
    outline: none;
    ${setTransition({ time: "0.8s"})};

    &:hover{
        /* background: ${setColor.mainWhite}; */
        background:transparent;
        color: ${setColor.primaryColor};

    }

    
`
