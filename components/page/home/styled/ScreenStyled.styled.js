import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  scroll-snap-align: start;
`;

export const Title = styled.h2``;

export const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`;

export const Flex = styled.div`
  display: flex;
  gap: 2em;
`;

export const ImageCard = styled.div`
  width: 320px;
`;

export const VideoCard = styled.div`
  flex-grow: 2;
`;
export const Para = styled.p`
  margin-top: 0;
`;

export const CardSmall = styled.div`
  position: relative;
`;
export const Main = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
