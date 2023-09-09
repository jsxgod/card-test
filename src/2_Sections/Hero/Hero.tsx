import React, { FC, useState } from "react";

import * as S from "./Hero.styled";

export interface HeroProps {}

const Hero: FC<HeroProps> = ({ ...rest }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <S.HeroWrapper>
      <S.HeroContent>
        <S.HeroTitle>{`go beyond`}</S.HeroTitle>
        {!isHidden && <S.HeroTitle>{`the horizon`}</S.HeroTitle>}
      </S.HeroContent>
    </S.HeroWrapper>
  );
};
export default Hero;
