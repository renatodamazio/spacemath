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

    &:before {
        content: "";
        border: ${size/2}px solid transparent;
        display: red;
        border-bottom-color: rebeccapurple;
        position: absolute;
        top: -${size + 7}px;
        left: 50%;
        width: 7px;
        height: 6px;
        transform: translateX(-50%);
    }

`
