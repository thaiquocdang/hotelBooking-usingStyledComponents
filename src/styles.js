import { css } from 'styled-components'

export const setColor = {
    primaryColor: "#b8a284",
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGrey: "ececec",
    lightGrey: "#f7f7f7"
}
export const setFont = {      
    main: "font-family: 'Lato', sans-serif; ",
    slanted: "font-family: 'Caveat', cursive;",
}

//setFlex helper fucntion, using setFlex() as default value or adding parameters such as setFlex({x:"space-between", y:"end"})
export const setFlex = ({x = "center", y = "center", direction = "row"} = {}) => {
    return `display: flex; flex-direction: ${direction}; align-items:${y}; justify-content: ${x}`
}

//setBackground helper function
export const setBackground = ({img="https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
color="rgba(0, 0, 0, 0)"} = {}) => {
    return `
        background: linear-gradient(${color}, ${color}),
        url(${ img}) center/cover no-repeat fixed
    `
}

export const setRem = (number = 16) => {
    return `${number/16}rem`;
}

export const setLetterSpacing = (number = 2) => {
    return `letter-spacing: ${number}px`;
}

export const setBorder = ({ width="2px", style="solid", color="black"} = {}) => {
    return `border: ${width} ${style} ${color}`;
}

const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576,
}

export const setTransition = ({ 
    property = "all", 
    time =  "0.5s",
    timing = "ease-in-out"
} = {}) => {
    return `transition: ${property} ${time} ${timing} `
}

//Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});
