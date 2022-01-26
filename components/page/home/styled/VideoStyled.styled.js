import styled from "styled-components";

export const VideoWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
  width: 100%;
  div {
    height: 320px;
    width: 100%;
    /* background-color: ${({ theme }) => them}; */
    background-image: url("https://res.cloudinary.com/dem2xvk2e/image/upload/v1643169159/upwork/Spinner-1s-200px_qtbc3k.gif");
    background-size: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #919293;
    background-blend-mode: multiply;
  }
`;
