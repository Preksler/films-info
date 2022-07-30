import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    padding: 0 8px;
    margin: 0;
    margin-bottom: 16px;
    &:hover {
        color: rgb(255 69 0);
    }
`;
