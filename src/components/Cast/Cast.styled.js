import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const CastWrapper = styled.div`
    flex-basis: calc((100% - 32px) / 5);
`;

export const CastImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
`;

export const CastName = styled.h3`
    text-align: center;
    color: #fff;
    background-color: rgb(255 69 0);
    font-size: 16px;
    padding: 8px 0;
    margin: 0;
`;

export const CastCharacter = styled.p`
    text-align: center;
    color: #fff;
    background-color: rgb(255 69 0);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 16px;
    padding: 8px 0;
    margin: 0;
`;
