import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ConnectionStatusCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  background: var(
    --White-Gradient,
    linear-gradient(90deg, rgba(250, 251, 252, 0.08) 0%, rgba(250, 251, 252, 0.2) 100%)
  );
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: auto;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
