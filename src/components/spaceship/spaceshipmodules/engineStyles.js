import styled from "styled-components";

const size = 14;
export const Engine = styled.span`
    border: size;
    width: ${size * 2}px;
    height: ${size * 2}px;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
    background-color: tomato;
    display: inline-block;
    border-bottom: 2px solid #000;
`