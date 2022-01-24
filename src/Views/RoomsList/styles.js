import styled from "styled-components";
import { FlexContainer } from "../../GlobalStyles";

const ListContainer = styled(FlexContainer)`
  flex-wrap: wrap;

  & > div {
    width: 80%;
    height: 55%;
    background-color: #ddd;

    & > h1 {
      width: 100%;
      margin: 10px;
    }

    & .row {
      height: 50px;
      margin: 0 20px;
      display: flex;

      &:nth-child(2n) {
        background-color: #bbb;
      }

      & .roomType {
        width: 20%;
      }

      & .description {
        width: 35%;
      }

      & .services {
        width: 35%;
      }

      & .price {
        width: 10%;
      }
    }
  }
`;

export default ListContainer;
