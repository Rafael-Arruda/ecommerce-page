import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
`;

export const Sample = styled.div`

    img {
        width: 330px;
        border-radius: 12px;
    }

    .thumbnails {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        figure {
            width: 70px;
            height: 70px;
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }

        .selected-thumb {
            border: 2px solid hsl(26, 100%, 55%);
            border-radius: 6px;
            overflow: hidden;

            img {
                opacity: 0.3;
                border-radius: 0;
            }
        }
    }
`;

export const Content = styled.div`

    h5 {
        text-transform: uppercase;
        color: hsl(26, 100%, 55%);
        margin-bottom: 8px;
        font-size: 0.7em;
    }

    h1 {
        width: 430px;
        font-size: 2.2em;
        margin-bottom: 25px;
    }

    p {
        width: 430px;
        font-size: 16px;
        color: gray;
        line-height: 22px;
        margin-bottom: 20px;
    }

    .current-price {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 4px;

        h2 {
            font-size: 1.4em;
        }

        span {
            background-color: hsl(25, 100%, 94%);
            color: hsl(26, 100%, 55%);
            padding: 4px 6px;
            font-weight: bold;
            font-size: 0.8em;
            border-radius: 6px;
        }
    }

    .old-price {
        margin-bottom: 25px;
    }

    .old-price span{
        text-decoration: line-through;
        color: #ccc;
        font-weight: bold;
        font-size: 0.8em;
    }

    .box-add-to-cart {
        display: flex;
        align-items: center;
        gap: 20px;

        .btn-add {
            background: hsl(26, 100%, 55%);
            color: #fff;
            border: 0;
            padding: 12px 50px;
            border-radius: 6px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: 0.2s all;
        }
        .btn-add:hover {
            opacity: 0.6;
        } 
    }

    .box-qty {
        width: 120px;
        padding: 5px 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: hsl(223, 64%, 98%);
        border-radius: 5px;

        span {
            margin: 0 30px;
            font-size: 0.9em;
            font-weight: bold;
        }

        button {
            background-color: transparent;
            border: none;
            color: hsl(26, 100%, 55%);
            font-size: 1.5em;
            font-weight: bold;
        }
    }
`;