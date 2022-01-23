import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 2em 0;
`;

export const Flex = styled.a`
  display: flex;
  width: 300px;
  margin: auto;
  text-decoration: none;
  align-items: center;
`;
export const Image = styled.div`
  width: 150px;
  min-width: 150px;
`;

export const Left = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  padding: 1em;
  color: #fff;
  flex-grow: 2;
`;
