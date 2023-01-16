import styled from "styled-components";

export const Container = styled.div`
    width: 280px;
    height: 180px;
    background-color: #fff;
    box-shadow: 5px 20px 20px #ddd;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: 80px;
    right: 50px;

    @media screen and (max-width: 500px){
        width: 95%;
        height: 240px;
        top: 115px;
        right: 10px;
        left: 10px;
        box-shadow: none;
    }

`;

export const Title = styled.h5`
    height: 25%;
    padding-left: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 0.8em;

    @media screen and (max-width: 500px){
        font-size: 0.9em;
    }
`;

export const Content = styled.div`
    padding: 0px 15px;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
        font-size: 0.8em;
        color: gray;
        font-weight: bold;
    }

    img {
        width: 40px;
        border-radius: 6px;
    }
    .box-details {
        width: 100%;
        color: gray;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .box-details h5, .box-details span {
        font-weight: 100;
    }
    .box-details .result {
        font-size: 1em;
        color: #000;
        font-weight: 600;
        margin-left: 6px;
    }
    .box-details svg {
        cursor: pointer;
    }

    button {
        background: hsl(26, 100%, 55%);
        color: #fff;
        border: 0;
        width: 100%;
        padding: 12px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s all;
    }
    button:hover {
        opacity: 0.6;
    }

    @media screen and (max-width: 500px){
        justify-content: space-evenly;

        .box-details {
            img {
                width: 50px;
            }
        }

        .box-details h5, .box-details span {
            font-size: 1em;
        }
        
        button {
            padding: 16px;
            font-size: 0.9em;
        }
    }

`;