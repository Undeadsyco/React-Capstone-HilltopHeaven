import styled from "styled-components";
import { FlexContainer } from "../../GlobalStyles";

const FormContainer = styled(FlexContainer)`

  & > form {
    width: 50%;
    height: 90%;
    border-radius: 10px;
    background-color: #eee;

    & > h2 {
      text-align: center;
      margin: 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid black;
    }

    & > label {
      width: 100%;
      height: 40px;
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      margin: 20px 0;

      & > div {
        width: 20%;
      }

      & > input {
        width: 80%;
        height: 30px;
      }

      & > select {
        width: 80%;
        height: 30px;
      }

      &.textarea{
        height: 80px;
      
          & > textarea {
          width: 80%;
          height: 70px;
        }
      }

      & .err {
        width: 100%;
        color: red;
        font-size: 0.8rem;
        text-align: center;
      }
    }

    & .btnbox {
      text-align: center;

      & > button {
        width: 80px;
        height: 25px;
        border-radius: 10px;
        background-color: blue;
        color: white;
      }
    }
  }
`;

export default FormContainer;