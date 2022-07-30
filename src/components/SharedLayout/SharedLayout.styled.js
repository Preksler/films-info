import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    position: relative;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid rgb(255 69 0);

    > nav {
        display: flex;
    }
`;

export const Link = styled(NavLink)`
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