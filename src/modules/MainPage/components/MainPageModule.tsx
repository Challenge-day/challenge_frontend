import * as Styled from "./MainPageModule.styled";
import { Icon } from "../../../shared/Icon/Icon";

import waves from "../../../assets/line-flow.png";

const MainPageModule = () => {
  return (
    <Styled.ContentSection>
      <div>
        <Styled.BalanceContent>
          <Styled.BalanceContent>
            <Styled.ContainerTitle>Your Balance</Styled.ContainerTitle>
            <Styled.BalanceAmountWrapper>
              <Icon width={25} height={30} iconId={"icon-e-max"} />
              <Styled.BalanceAmount>1.7M</Styled.BalanceAmount>
            </Styled.BalanceAmountWrapper>
            <Styled.ContainerContent>You’ve got it 👍</Styled.ContainerContent>
          </Styled.BalanceContent>
          <Styled.SvgContainer>
            <img src={waves} alt="waves" width={255} height={85} />
          </Styled.SvgContainer>
        </Styled.BalanceContent>
      </div>
    </Styled.ContentSection>
  );
};

export default MainPageModule;
