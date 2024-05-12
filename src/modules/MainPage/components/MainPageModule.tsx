import * as Styled from "./MainPageModule.styled";

const MainPageModule = () => {
  return (
    <Styled.ContentSection>
      <Styled.BalanceContainer>
        <Styled.ContainerTitle>Your Balance</Styled.ContainerTitle>
        <Styled.ContainerContent>You’ve got it 👍</Styled.ContainerContent>
      </Styled.BalanceContainer>
    </Styled.ContentSection>
  );
};

export default MainPageModule;
