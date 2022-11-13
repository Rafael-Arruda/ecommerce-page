import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 0px 8%;

    @media screen and (max-width: 800px){
        padding: 0;
    }

`;

export const Content = styled.div`
    height: 15vh;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        padding: 0px 30px;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    align-items: center;

    h1 {
        letter-spacing: -1px;
        font-size: 30px;
    }

    .icon_menu {
        cursor: pointer;
        display: none;
        margin-right: 15px;
        margin-top: 6px;
    }

    @media screen and (max-width: 800px){
        .icon_menu {
            display: flex;
        }
    }
`;

export const Navigation = styled.nav`
    width: 40%;
    max-width: 400px;
    min-width: 300px;
    margin-left: -12vw;

    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        height: 15vh;
    }

    a {
        height: 100%;
        display: flex;
        align-items: center;
        color: gray;
        font-size: 0.9em;
        border-top: 8px solid transparent;
        border-bottom: 4px solid transparent;
        transition: 0.8s all;
    }
    a:hover {
        border-bottom: 4px solid  hsl(26, 100%, 55%);
    }

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const ProfileArea = styled.div`
    display: flex;
    align-items: center;

    .cart {
        width: 20px;
    }

    .img_profile {
        cursor: pointer;
        width: 45px;
        margin-left: 30px;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: 0.5s all;
    }
    .img_profile:hover {
        border: 2px solid hsl(26, 100%, 55%);
    }

    @media screen and (max-width: 800px){
        .img_profile {
            width: 35px;
        }
    }
`;