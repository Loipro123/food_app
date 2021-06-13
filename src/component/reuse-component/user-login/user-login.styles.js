import styled from 'styled-components';

export const UserIcon = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: ${props => {
        if (props.size) {
            return "15px"
        }else{
            return "20px"
        }
     } };
      margin: 5px 25px 10px 10px;
      height: ${props => {
           if (props.size) {
               return "40px"
           }else{
               return "60px"
           }
        } };
      width: ${props => {
        if (props.size) {
            return "40px"
        }else{
            return "60px"
        }
     } };
      color: white;
      background-color: rgb(240,189,78);
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      font-weight: bold;
`;

export const ActiveIcon = styled.div`
      position: absolute;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: rgb(235,47,100);
      top:-2px;
      right: 2px;
`;