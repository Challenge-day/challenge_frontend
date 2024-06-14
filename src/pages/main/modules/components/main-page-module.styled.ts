import styled from "styled-components";

export const ContentSection = styled.section`

  width: 100%;
  /* margin: 0 auto; */
  min-height: 100vh;
  border-radius: 20px;
  /* background-color: var(--white-gradient); */
`;

export const SectionContainer = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 15px;
  border-radius: 25px;

  background-color: var(--main-white);
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "amount-info"
    "chart"
    "actions";
  row-gap: 20px;

  background-color: var(--blue-100);
  padding: 20px;

  border-radius: 25px;
`;

export const AmountInfo = styled.div`
  display: grid;
  grid-area: amount-info;
  grid-template-areas:
    "title"
    "balanceAmount"
    "content";
  row-gap: 10px;
`;

export const ContainerTitle = styled.h1`
  grid-area: title;
  color: var(--white-100);
  font-size: 20px;
  font-weight: 500;
`;

export const ContainerContent = styled.div`
  grid-area: content;
  color:var(--white-100);
`;

export const BalanceAmountWrapper = styled.div`
  grid-area: balanceAmount;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 35px;
  font-weight: 700;
  line-height: 100%;
`;

export const BalanceAmount = styled.div`
color: var(--white-100);
`;

export const Container = styled.div`
  grid-area: chart;
  display: flex;
  justify-content: center;
 
`;

export const Actions = styled.div`
  display: grid;
  grid-area: actions;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "daily mining";
  column-gap: 15px;
  justify-items: center;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
  padding: 20px;
  border-radius: 20px;
  width: 100%;

  color: var(--black-100);
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 130%;
`;

export const CardImage = styled.img`
  max-width: 100%;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 130%;
`;
