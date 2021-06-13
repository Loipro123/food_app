import styled from 'styled-components';
import {DropdownToggle} from 'reactstrap';
export const toogleDrop = styled(DropdownToggle)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    border: none !important;
    height: 100%;
    &:focus,
    :active {
    outline: none !important;
    outline-style: none;
    }
`