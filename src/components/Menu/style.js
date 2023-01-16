import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 999;
`;

export const Fade = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.6);
`;

export const Navigation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 240px;
    min-height: 100vh;
    background: #fff;
    padding: 20px;

    .close-menu {
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 50px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    a {
        font-weight: bold;
        color: #000;
        font-size: 1.2em;
    }
`;