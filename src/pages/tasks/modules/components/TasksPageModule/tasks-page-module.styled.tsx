import styled from "styled-components";

export const Container = styled.div`
  border-radius: 25px;
  background: var(--blue-100, #2054f4);
  width: 100%;
`;

export const TasksList = styled.ul`
  display: grid;
  flex-wrap: wrap;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
`;
