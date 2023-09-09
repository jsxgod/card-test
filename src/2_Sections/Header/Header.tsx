import React, { FC } from "react";

import * as S from "./Header.styled";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.LogoWrapper>
          <S.Logo>H_</S.Logo>
        </S.LogoWrapper>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
export default Header;
