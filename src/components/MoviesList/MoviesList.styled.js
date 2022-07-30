import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

export const CardWrapper = styled.div`
    position: relative;
    flex-basis: calc((100% - 48px) / 4);
    > a {
        text-decoration: none;
    }
`;

export const MovieImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
`;

export const MovieName = styled.h3`
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(255 69 0 / 55%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    padding: 8px 0;
    margin-bottom: 0;
    margin-top: 0;
`;
