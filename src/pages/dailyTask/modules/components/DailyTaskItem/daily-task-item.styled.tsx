import styled from "styled-components";

export const DailyTaskItem = styled.li`
  width: 255px;
  height: 68px;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid linear-gradient(to right, rgba(250, 251, 252, 0.08), rgba(250, 251, 252, 0.2));
  background: linear-gradient(to right, rgba(250, 251, 252, 0.08), rgba(250, 251, 252, 0.2));
  color: var(--white-100);

  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto;
`;

export const CheckListImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const TextCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 155px;
  height: 48px;
  gap: 10px;
`;

export const Text = styled.p`
  font-family: Montserrat;
  text-align: left;
  width: 155px;
  height: 28px;
  font-size: 12px;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 56px;
  height: 15px;
`;

export const Count = styled.span`
  width: 42px;
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.4px;
  color: var(--yellow);
`;
