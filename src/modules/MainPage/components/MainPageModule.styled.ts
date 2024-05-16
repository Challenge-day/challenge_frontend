import styled from "styled-components";

export const ContentSection = styled.section`
  width: 100%;
  min-height: 100vh;
  //padding: 20px 15px 15px;

  border-radius: 20px;
  //outline: 1px solid tomato;
  background-color: var(--content-bg);
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--blue-100);
  width: 100%;
  border-radius: 20px;
  padding: 12px 20px 17px;
  margin-inline: auto;
`;

export const BalanceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerTitle = styled.h1`
  color: var(--main-white);
  font-size: 20px;
  font-weight: 500;
`;

export const ContainerContent = styled.div``;

export const BalanceAmountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 35px;
  font-weight: 700;
  line-height: 100%;
`;

export const BalanceAmount = styled.div``;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
