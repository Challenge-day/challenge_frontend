import * as Styled from "./components/welcome-page-module.styled";
import { Icon } from "../../../shared/Icon/Icon";

import challange from "./images/challange.png";

const WelcomePageModule = () => {
  return (
    <>
      <Styled.MainWrapper>
        <Styled.MainContent>
          <Styled.Title>THE FUTURE</Styled.Title>
          <Styled.Description>
            Combining the features of SocialFi and DeFi and rewarding users for completing real-life challenges.
          </Styled.Description>
          <Styled.DecorationBlock></Styled.DecorationBlock>
        </Styled.MainContent>
      </Styled.MainWrapper>
      <Styled.FooterNav>
        <Styled.NaviLink to="/main">
          <Styled.FooterNavContent>START YOUR CHALLENGE</Styled.FooterNavContent>
          <Icon width={65} height={30} iconId={"icon-footer-arrow"} />
        </Styled.NaviLink>
      </Styled.FooterNav>
      <Styled.Challange src={challange} alt="challange" />
    </>
  );
};

export default WelcomePageModule;
