import * as Styled from "./components/welcome-page-module.styled";
import { Icon } from "../../../shared/Icon/Icon";

import chal from "./images/chal.png";
import lange from "./images/lange.png";

const WelcomePageModule = () => {
  return (
    <>
      <Styled.MainWrapper>
        <Styled.MainContent>
          <Styled.Title>THE FUTURE</Styled.Title>
          <Styled.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            blandit volutpat maecenas volutpat blandit.
          </Styled.Description>
          <Styled.DecorationBlock></Styled.DecorationBlock>
        </Styled.MainContent>
      </Styled.MainWrapper>
      <Styled.FooterNav>
        <Styled.NaviLink to="/main">
          <Styled.FooterNavContent>
            START YOUR CHALLENGE
          </Styled.FooterNavContent>
          <Icon width={65} height={30} iconId={"icon-footer-arrow"} />
        </Styled.NaviLink>
      </Styled.FooterNav>
      <Styled.Chal src={chal} alt="challange" />
      <Styled.Lange src={lange} alt="challange" />
    </>
  );
};

export default WelcomePageModule;
