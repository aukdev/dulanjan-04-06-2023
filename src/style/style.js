import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  background-color: red;

  h1 {
    text-align: center;
  }

  p {
    color: green;

    &:hover {
      color: blue;
    }
  }
`;

export const AppBottom = styled.button`
  background-color: white;
  color: black;
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ color }) => (color ? color : "red")};
  }
`;

export const AppInput = styled.input``;

const Box = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: 20px;
  background-color: white;
  color: black;
`;

export const Box1 = styled(Box)`
  height: 25vh;
`;
export const Box2 = styled(Box)`
  height: 25vh;
`;
export const Box3 = styled(Box)`
  height: 30vh;
`;
export const Box4 = styled(Box)`
  height: 35vh;
`;

export const MyForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
