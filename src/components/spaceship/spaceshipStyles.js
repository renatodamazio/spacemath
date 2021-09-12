import styled from "styled-components";

export const SpacecraftWrapper = styled.div`
    border: 1px solid red;
    width: 160px;
    height: 120px;
    position: absolute;
    bottom: 16px;
    transform: translateX(-50%);
    left: 50%;
`

export const SpaceCraftAdapter = styled.div`
    width: 60px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid blue;
`

export const SpaceCraftWrapperWings = styled.section`
    position: absolute;
    bottom: 0%;
    display: flex;
    justify-content: space-between;
    left: 0%;
    z-index: 1;
    width: 100%;

    #rightWing {
        transform: scaleX(-1);
    }
`

export const SpaceCraftWrapperEngine = styled.section`
    position: absolute;
    bottom: -15px;
    left: 0px;
    width: 100%;
    text-align: center;
`

export const SpaceCraftWrapperCargo = styled.section`
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
    z-index: 2;
    text-align: center;
`