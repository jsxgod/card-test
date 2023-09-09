import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 32px 64px;
  display: flex;
  //background: conic-gradient(at top right, red, blue);
`;

export const HeaderContent = styled.div`
  display: grid;
  place-items: center;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.button`
  cursor: pointer;
  font-size: 48px;
  font-weight: 900;
`;
