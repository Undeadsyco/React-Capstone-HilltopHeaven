import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles";

const HomeContainer = styled(GridContainer)`

  & > h1 {
    grid-column: 1/13;
    text-align: center;
  }

  & > div {
    height: 90%;
    border-radius: 10px;
    background-color: #eee;
    grid-column: 7/11;
    grid-row: 3/9;
    text-align: center;

    & > h3 {
      padding: 0 20px;
      margin: 20px 0;
      text-align: left;
      border-bottom: 2px solid black;
    }

    & > button {
      margin-top: 20px;
      width: 40%;
      height: 30px;
      border-radius: 10px;
      background-color: blue;
      color: white;

      & > a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export default HomeContainer;
