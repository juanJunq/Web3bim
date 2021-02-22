import styled from "styled-components"

export const HeaderComponent = styled.header`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 10px auto;
    font-family: "Open Sans";
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
`
export const Menu = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 1199px){
        font-size: small;
    }
`
export const Left = styled.div`
    @media screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 350px){
        display: none;
    }
    display: flex;
    width: 100%;
`
export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-content: space-around;
`
export const Li = styled.li`
    align-items: flex-end;
    display: flex;
    margin: 10px
`
export const OesteLink = styled.a`
    color: red;
    font-weight: bolder;
    text-decoration: none;
`
export const LesteLink = styled.a`
    color: blue;
    font-weight: bolder;
    text-decoration: none;
`
export const Logo = styled.a`
    display: flex;
    margin: 25px 20px 0 0;
`
export const Meio = styled.div`
    display: flex;
    width: 100%;
`
export const Link = styled.a`
    font-weight: bolder;
    text-decoration: none;
    color: black;
`
export const Seta = styled.image`
    margin: 3.5px;
    display: flex;
`
export const User = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
`
export const Usuario = styled.image`
    display: flex;
    margin: 0 10px;
`
export const Busca = styled.div`
    display: flex;
    margin: 0 1px;
    padding: 5px;
    width: 170px;
`
export const BodyComponent = styled.section`
    font-family: "Open Sans";
    font-weight: bolder;
`
export const Linha = styled.hr`
    border: 1px solid rgb(255, 0, 0);
`