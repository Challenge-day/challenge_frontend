import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 26, 49, 0.68);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 70px 70px 0px 0px;
  background: var(--White-100, #fafbfc);
  width: 375px;
  height: 520px;
  padding: 20px 20px 50px 20px;
`;

export const TextH3 = styled.h3`
  text-align: center;
  color: var(--green-linear-gradient, linear-gradient(180deg, #051e22 -72.83%, #5a944e 100%));
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 36px */
  margin-bottom: 10px;
`;
export const TextP = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;
export const Btn = styled.button`
  display: flex;
  width: 335px;
  height: 55px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--Black-200, #001a31);
  color: var(--White-100, #fafbfc);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
`;