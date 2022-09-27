import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Items = styled.div`
  background-image: url(${(props) => props.shoes});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
`;

export const Input = styled.input`
  margin-left: 15px;
  padding: 10px 0 10px 10px;
  width: 50px;
  border: ${({ theme }) => `solid ${theme.colors.main}`};
  &:focus,
  &:active,
  &:hover {
    outline-color: ${({ theme }) => theme.colors.main};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  margin-left: 15px;
  padding: 5px 5px;
  color: ${({ theme }) => theme.colors.white};
`;
