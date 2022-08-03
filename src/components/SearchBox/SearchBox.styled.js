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
    border: 1px solid rgb(255 69 0);
    margin-right: 4px;
    color: rgb(255 69 0);
    font-size: 16px;
    font-weight: 500;

    &:focus {
        outline: none;
        border: 2px solid rgb(255 69 0);
    }

    &:hover {
        border: 2px solid rgb(255 69 0);
    }

    &::placeholder {
        color: rgb(255 69 0);
    }
`;

export const Button = styled.button`
    position: relative;
    padding: 8px 16px;
    border: 2px solid rgb(255 69 0);
    border-radius: 4px;
    color: rgb(255 69 0);
    background-color: transparent;
    cursor: pointer;

    & > span {
        position: relative;
        font-size: 16px;
        font-weight: 700;
        z-index: 3;
    }

    ::before {
        content: "";
        position: absolute;
        top: 6px;
        left: -3px;
        width: calc(100% + 6px);
        height: calc(100% - 12px);
        background-color: #fff;
        transition: 0.3s ease-in-out;
        transform: scaleY(1);
        transition-delay: 0.3s;
    }

    :hover::before {
        transform: scaleY(0);
    }

    ::after {
        content: "";
        position: absolute;
        top: -3px;
        left: 6px;
        width: calc(100% - 12px);
        height: calc(100% + 6px);
        background-color: #fff;
        transition: 0.3s ease-in-out;
        transform: scaleX(1);
    }

    :hover::after {
        transform: scaleX(0);
    }
`;
