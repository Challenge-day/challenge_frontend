import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 80px;
  background-color: blue;
`;

export const Name = styled.p`
  color: var(--white-100, #fafbfc);
  flex-grow: 1;
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  display: flex;
  align-items: end;
  &::after {
    content: "";
    flex-grow: 1;
    width: 100%;
    height: 0.7px;
    margin-left: 5px;
    background-image: linear-gradient(to right, rgba(252, 252, 252, 0.4) 50%, transparent 50%);
    background-size: 6px 100%;
    background-repeat: repeat-x;
  }
`;

export const Count = styled.span`
  color: var(--yellow, #ffee02);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const BaseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
