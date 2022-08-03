import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    border: 1px solid rgb(255 69 0);
    border-radius: 4px;
    display: flex;
    margin-bottom: 8px;
`;

export const MovieImage = styled.img`
    display: block;
    width: 300px;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 16px;
`;

export const MovieName = styled.h1`
    color: #000;
    font-size: 22px;
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
`;

export const MovieText = styled.p`
    color: #000;
    font-size: 18px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
`;

export const MovieDescription = styled.p`
    color: #000;
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0;
  margin-bottom: 8px;
`;

export const AdditionalList = styled.div`
  display: flex;
  list-style: none;
`;

export const AdditionalText = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const AdditionalLink = styled(NavLink)`
  /* padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active) {
    color: orangered;
    } */


    position: relative;
    padding: 8px 16px;
    border: 2px solid rgb(255 69 0);
    border-radius: 4px;
    color: rgb(255 69 0);
    background-color: transparent;
    cursor: pointer;
    margin-right: 16px;
    text-decoration: none;

    :last-child {
        margin-right: 0;
    }

    & > span {
        position: relative;
        font-size: 16px;
        font-weight: 700;
        z-index: 3;
    }

    &.active {
        border: 2px solid orangered;
    }

    :not(.active)::before {
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

    :not(.active)::after {
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