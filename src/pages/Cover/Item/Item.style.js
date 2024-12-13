import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InnerDiv = styled.div`
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  padding-bottom: 10px;
  height: 1.25rem;
`;

export const HorizontalLine = styled.div`
  border: solid #8c52ff 1px;
  width: 50%;
  height: 2px;
`;

export const ContentBox = styled.div`
  height: 5rem;
`;

export const ReelLink = styled.a`
  width: min-content;
  position: relative;
`;

export const PhotoBox = styled.div`
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#ae503f);
    backdrop-filter: blur(1.5px);
    z-index: 1;
  }

  &:hover svg {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 2;
    transition: opacity 0.3s ease;
  }
`;

export const InstaReel = styled.img`
  width: 200px;
`;

export const VerticalLine = styled.div`
  border: solid #8c52ff 0.5px;
  height: 40%;
  width: 1px;
`;
