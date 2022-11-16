import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    position: absolute;
    text-align: right;

    svg {
        color: #fff;
        margin-bottom: 10px;
        cursor: pointer;
        transition: 0.5s all;
    }
    svg:hover {
        color: hsl(26, 100%, 55%);
    }
    
    .prev, .next {
        color: #000;
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
        padding: 6px;
        transition: 0.5s all;
    }

    .prev:hover, .next:hover {
        color: hsl(26, 100%, 55%);
    }

    .prev {
        top: 40%;
        left: -20px;
    }

    .next {
        top: 40%;
        right: -20px;
    }
`;