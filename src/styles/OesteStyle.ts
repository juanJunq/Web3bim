import styled from "styled-components"

export const BodyComponent = styled.div`
    font-family: "Open Sans";
    margin: 0;
    padding: 0;
    border: 1px solid black;
`
export const Grid = styled.section`
    display: grid;
    grid-template-areas: "c m";
`
export const Conf = styled.div`
    grid-area: c;
`
export const H2 = styled.h2`
    color: rgb(255, 0, 0);
    font-weight: bolder;
    font-size: 43px;    
`
export const Menu = styled.div`
    display: flex;
    background-color: #c4c4c4;
    width: 800px;
`
export const Div = styled.div`
    display: flex;
    border: 1px solid black;
    align-items: center;
    border-radius: 15px;
    background-color: #E5E1E1;
    height: 25px;
    padding: 8px;
    margin: 10px;
`
export const Meio = styled.div`
    grid-area: m;
`
export const Dentro = styled.div`
    display: flex;
    border: 1px solid black;
    background-color: #c4c4c4;
    justify-content: center;
`
