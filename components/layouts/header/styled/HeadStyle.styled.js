import styled from "styled-components";

export const HeadStyle = styled.div`
  text-align: center;
  padding: 4px 0;
  color: ${(props) => props.theme.grey};
  background-color: ${(props) => props.theme.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  svg {
    height: 30px;
    width: auto;
  }
`;
