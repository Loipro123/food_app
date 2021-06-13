import styled from 'styled-components';

export const UserInter = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 24vw;
    border: 1px solid  rgb(222, 223, 224);
    top: -10px;
    right: 50px;
    z-index: 1000;
    border-radius: 5px;
    background-color: white;
   
`;

export const UserHeader = styled.div`
    display: flex;
    border-bottom:  1px solid  rgb(222, 223, 224);
    padding: 10px;
`;

export const UserHeader1 = styled.div`
    & div{
       margin-top: -5px;
    }
    & h5{
        margin-top: 4px;
        font-size: 18px;
    }
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    
`;

export const Userbody = styled.div`
    font-size: 17px;
    padding: ${props => props.top ? "16px 25px 8px 25px" : "8px 25px"};
    border-bottom: ${props => props.border ? "1px solid  rgb(222, 223, 224)" : "none"};
    cursor: pointer;
    &:hover {
        background-color: rgb(244,242,242);
    }
`;