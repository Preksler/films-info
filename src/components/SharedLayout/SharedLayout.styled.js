import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    margin-right: 16px;
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: orangered;
    }
`;

export const LinkNav = styled(NavLink)`
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