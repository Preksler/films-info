import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 16px;
    display: inline-flex;
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border-color: rgb(255 69 0);
    border-style: solid;
    border-width: 1px;
    margin-right: 4px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgb(255 69 0);
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;
