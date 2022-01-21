import styled from "styled-components";
import { FlexContainer } from "../../GlobalStyles";

const LoginContainer = styled(FlexContainer)`
  & > form {
    width: 50%;
    height: 50%;
    border-radius: 10px;
    background-color: rgba(235, 235, 235);

    & .heading {
      border-bottom: 1px solid black;
      text-align: center;
      margin-bottom: 20px;

      & > h1 {
        margin: 10px;
      }
    }

    & > label{ 
      & > div {
        margin: 0 15px;
        font-size: 1.2rem;
      }

      & > input {
        width: 95%;
        height: 25px;
        margin: 0 15px;
      }
    }

    & .btn {
      text-align: center;
      margin-top: 20px;
      & > button {
        width: 20%;
        height: 25px;
        border-radius: 10px;
        background-color: rgb(102, 173, 255);
        color: white;
      }
    }
  }
`;

export default LoginContainer;
