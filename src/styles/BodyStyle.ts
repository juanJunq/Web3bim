import styled from "styled-components"

export const BodyComponent = styled.div`
    font-family: "Open Sans";
    font-weight: bolder;
`
export const Grid = styled.section`
    display: grid;
    grid-template-areas:
        "n nm"
        "n mf";
`
export const Linha = styled.hr`
    border: 1px solid rgb(255, 0, 0);
`
export const News = styled.div`
    background-color: #c4c4c4;
    height: 840px;
    width: 474px;
    border: 1px solid black;
    grid-area: n;
`
export const Background = styled.div`
    padding: 0;
    background-image: url("/img/dpoy.svg");
    background-repeat: no-repeat;
    height: 830px;
    width: 459px;
    margin: 5px;
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const Text = styled.hgroup`
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    align-items: flex-end;
`
export const Meio = styled.div`
    background-color: #c4c4c4;
    width: 448px;
    height: 560px;
    border: 1px solid black;
    margin-right: 450px;
    grid-area: nm;
`
export const Conf = styled.picture`
    padding: 0;
    display: grid;
    grid-template-rows: 33%;
`
export const Baixo = styled.div`
    background-color: #c4c4c4;
    height: 250px;
    margin-top: 25px;
    border: 1px solid black;
    width: 470px;
    grid-area: mf;
`
export const Contra = styled.picture`
    margin: 10px;
`
export const Imagem = styled.image`
    margin: 5px;
`