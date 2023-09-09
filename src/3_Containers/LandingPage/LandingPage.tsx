import React, { FC } from "react";

import * as S from "./LandingPage.styled";
import Hero from "2_Sections/Hero/Hero";

export interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({ ...rest }) => {
  return (
    <S.LandingPageWrapper>
      <Hero />
    </S.LandingPageWrapper>
  );
};
export default LandingPage;
