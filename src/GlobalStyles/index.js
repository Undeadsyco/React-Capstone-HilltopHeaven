import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  & .header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(158, 239, 255, 0.7);

    & > div {
      display: flex;
      align-items: center;
    }

    & > nav {
      display: flex;
      align-items: center;
      padding-right: 20px;

      & > a {
        color: black;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
          cursor: pointer;
        }
      }

      & > button {
        border: none;
        background-color: transparent;
        margin: 0 10px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  & .body {
    height: 90%;
  }
`;

export const GridContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: grid;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  grid-template-columns: ${props => props.cols};
  grid-template-rows: ${props => props.rows};

  &.multiCols {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  }

  &.multiRows {
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.multiGrid {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`;

export const FlexContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`