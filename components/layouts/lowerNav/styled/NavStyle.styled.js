import styled from "styled-components";

export const NavStyle = styled.div`
  text-align: center;
  color: ${(props) => props.theme.black};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Select = styled.select`
  width: 200px;
  padding: 0.3em 1em;
  border: none;
  font-weight: 500;
`;
