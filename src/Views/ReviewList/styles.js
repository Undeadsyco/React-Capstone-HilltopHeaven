import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles";

const ListContainer = styled(GridContainer)`
  & .search-bar {
    padding: 0 20px;
    border-radius: 5px;
    grid-column: 3/10;
    grid-row: 1/4;
    background-color: #eee;

    & > h1 {
      margin: 10px 0;
    }

    & > div {
      margin-bottom: 10px;

      & > select {
        width: 60%;
        height: 30px;
      }

      & > button {
        width: 80px;
        height: 30px;
        margin-left: 30px;
        border-radius: 5px;
        background-color: blue;
        color: white;
      }
    }
  }

  & .list {
    grid-column: 3/10;
    grid-row: 4/12;
    display: grid;
    align-items: start;
    grid-template-columns: 100%;

    & .list-row {
      display: flex;
      background-color: #eee;

      & > h3 {
        margin: 20px;
      }

      & .name {
        width: 25%;
      }

      & > p {
        margin: 0 20px;
      }

      & .message {
        width: 60%;
      }

      & .btnbox {
        width: 15%;
        text-align: center;

        & > button {
          height: 25px;
          width: 80%;
          background-color: red;
          color: white;
          border-radius: 5px;
        }
      }

    }
  }
`;

export default ListContainer;