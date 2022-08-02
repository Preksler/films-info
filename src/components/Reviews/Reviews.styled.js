import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const ReviewWrapper = styled.div`
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid rgb(255 69 0);
    border-right: 1px solid rgb(255 69 0);
    border-bottom: 1px solid rgb(255 69 0);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 8px;
`;

export const AutorName = styled.h3`
    color: #fff;
    background-color: rgb(255 69 0);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 16px;
    padding: 8px 8px;
    margin: 0;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 8px;
    object-fit: cover;
    border: 1px solid rgb(255 69 0);
`;

export const AutorContent = styled.p`
    font-size: 16px;
    padding: 8px;
    margin: 0;
`;

export const NoReviews = styled.p`
    text-align: center;
    width: 100%;
    color: #fff;
    background-color: rgb(255 69 0);
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 0;
    margin: 0;
`;