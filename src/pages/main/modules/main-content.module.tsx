import * as Styled from "./components/main-page-module.styled";
import { Icon } from "../../../shared/Icon/Icon";
import { ActionCard, actionsCardsData } from "./data/data";
import { Link } from "react-router-dom";
import LineChart from "./chart-component.module";

const MainContentModule = () => {
  return (
    <>
      <Styled.AmountInfo>
        <Styled.ContainerTitle>Your Balance</Styled.ContainerTitle>
        <Styled.BalanceAmountWrapper>
          <Icon styles={{ fill: "white" }} width={25} height={30} iconId={"icon-e-max"} />
          <Styled.BalanceAmount>1.7M</Styled.BalanceAmount>
        </Styled.BalanceAmountWrapper>
        <Styled.ContainerContent>You’ve got it 👍</Styled.ContainerContent>
      </Styled.AmountInfo>

      <Styled.Container>
        <LineChart />
      </Styled.Container>
      <Styled.Actions>
        {actionsCardsData.map((action: ActionCard, index) => (
          <Link key={index} to={action.navigateTo}>
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
    </>
  );
};
export default MainContentModule;
