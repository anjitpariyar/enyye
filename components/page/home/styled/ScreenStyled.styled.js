import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: calc(100vh - 56px);
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
  margin: 0;
  color: ${(props) => props.theme.white};
  font-size: 14px;
`;

export const CardSmall = styled.div`
  position: relative;
`;
export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: flex-end;
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }
`;
export const Height = styled.div`
  height: 100%;
`;
