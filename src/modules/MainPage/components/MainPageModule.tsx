import * as Styled from "./MainPageModule.styled";
import { Icon } from "../../../shared/Icon/Icon";
import { actionsCardsData } from "../data/data";

import waves from "../../../assets/line-flow.png";
import { Link } from "react-router-dom";

const MainPageModule = () => {
  return (
    <Styled.ContentSection>
      <Styled.SectionContainer>
        <Styled.MainContent>
          <Styled.AmountInfo>
            <Styled.ContainerTitle>Your Balance</Styled.ContainerTitle>
            <Styled.BalanceAmountWrapper>
              <Icon width={25} height={30} iconId={"icon-e-max"} />
              <Styled.BalanceAmount>1.7M</Styled.BalanceAmount>
            </Styled.BalanceAmountWrapper>
            <Styled.ContainerContent>You’ve got it 👍</Styled.ContainerContent>
          </Styled.AmountInfo>

          <Styled.SvgContainer>
            <img src={waves} alt="waves" width={255} height={85} />
          </Styled.SvgContainer>
          <Styled.Actions>
            {actionsCardsData.map((action, index) => (
              <Link to={action.navigateTo}>
                <Styled.Card
                  key={index}
                  style={{
                    gridArea: action.gridArea,
                    backgroundColor: action.bgColor,
                  }}
                >
                  <Styled.CardImage src={action.image} alt={action.title} />
                  <Styled.CardTitle>{action.title}</Styled.CardTitle>
                </Styled.Card>
              </Link>
            ))}
          </Styled.Actions>
        </Styled.MainContent>
      </Styled.SectionContainer>
    </Styled.ContentSection>
  );
};

export default MainPageModule;
