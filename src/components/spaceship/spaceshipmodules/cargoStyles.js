import styled from "styled-components";

const size = 50;
const cargoBay = 50;
const radius = 50;
export const Cargo = styled.div`
    background-color: rebeccapurple;
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    position: relative;

    &:before, &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 27px;
        border: 13px solid red;
        height: 100%;
        display: inline-block;
        box-shadow: inset 0px 0px 13px 15px red;
        z-index: 1;
        top: -50px;
        border-radius: 87%;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        border-right-color: transparent;
        border-top-color: transparent;

    }

    &:before {
        transform: rotate(28deg);
    }

    &:after {
        transform: scaleX(-1) rotate(28deg);
        left: -3px;
    }
`
