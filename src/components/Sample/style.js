import styled from "styled-components";

export const Sample = styled.div`

    img {
        width: 330px;
        border-radius: 12px;
        cursor: pointer;
    }

    .mobile-sample {
        display: flex;
        align-items: center;

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
            left: 15px;
        }

        .next {
            right: 15px;
        }
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

        .selected-thumb, figure:hover {
            border: 2px solid hsl(26, 100%, 55%);
            border-radius: 6px;
            overflow: hidden;
            position: relative;

            .fade {
                width: 100%;
                height: 100%;
                position: absolute;
                opacity: 0.6;
                background-color: #fff;
            }

            img {
                border-radius: 0;
            }
        }

    }

    // media queries
    @media screen and (max-width: 900px){
        
        img {
            width: 250px;
        }

        .thumbnails {

            figure {
                width: 50px;
                height: 50px;
            }
        }
    }
    @media screen and (max-width: 700px){

        img {
            width: 100%;
            border-radius: 0;
        }
            
        .thumbnails {
            display: none;
        }
    }
`;