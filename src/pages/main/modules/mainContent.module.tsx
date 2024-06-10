import * as Styled from "./components/MainPageModule.styled";
import { Icon } from "../../../shared/Icon/Icon";
import { ActionCard, actionsCardsData } from "./data/data";
import waves from "../../../../assets/line-flow.png";
import { Link } from "react-router-dom";
import LineChart from "./chartComponent.module";

const MainContentModule = () => {
    return (
        <Styled.MainContent>
            <Styled.AmountInfo>
                <Styled.ContainerTitle>Your Balance</Styled.ContainerTitle>
                <Styled.BalanceAmountWrapper>
                    <Icon width={25} height={30} iconId={"icon-e-max"} />
                    <Styled.BalanceAmount>1.7M</Styled.BalanceAmount>
                </Styled.BalanceAmountWrapper>
                <Styled.ContainerContent>
                    You’ve got it 👍
                </Styled.ContainerContent>
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
                            <Styled.CardImage
                                src={action.image}
                                alt={action.title}
                            />
                            <Styled.CardTitle>{action.title}</Styled.CardTitle>
                        </Styled.Card>
                    </Link>
                ))}
            </Styled.Actions>
        </Styled.MainContent>
    );
};
export default MainContentModule;
