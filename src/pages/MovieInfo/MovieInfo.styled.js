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
  padding: 8px 16px;
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
    }
`;