import styled from "styled-components";

export const Section = styled.section`
  /* position: absolute; */
  padding: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Flex = styled.a`
  display: flex;
  width: 170px;
  margin: auto;
  text-decoration: none;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;
export const Image = styled.div`
  width: 60px;
  min-width: 60px;
`;

export const Left = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  padding: 6px 12px;
  color: #fff;
  flex-grow: 2;
  font-size: 13px;
`;
