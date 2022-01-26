import styled from "styled-components";

export const ArrowDiv = styled.div`
  .slick-arrow {
    z-index: 9;
    width: 56px;
    height: 100%;

    background: #4cba4d;
    border-radius: 12px 0px 0px 12px;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.3s linear;

    &.slick-prev {
      left: 0%;
      border-radius: 0px 12px 12px 0px;
      justify-content: flex-start;
    }
    &.slick-next {
      right: 0%;
    }
    &:before {
      content: none;
    }
    &.slick-disabled {
      transform: scale(0);
    }
    svg {
      height: 16px;
      width: 16px;
      background-color: ${({ theme }) => theme.black};
      border-radius: 50%;
      padding: 6px;
    }
  }
`;
