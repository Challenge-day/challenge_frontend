import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainWrapper = styled.section`
  background-color: var(--blue-100);
  min-height: calc(100vh - 100px);
`;

export const MainContent = styled.div``;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--white-100);
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--white-100);
`;

export const DecorationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Challange = styled.img`
  position: absolute;
  bottom: 18%;
  left: 0%;
`;
export const Lange = styled.img`
  position: absolute;
  bottom: 25%;
  left: -7%;
`;

export const FooterNav = styled.footer`
  padding: 35px 20px;
  background-color: var(--yellow);
`;

export const FooterNavContent = styled.div`
  color: var(--black-100);
  font-size: 15px;
  font-weight: 600;
  line-height: 150%;
  text-transform: uppercase;
`;

export const NaviLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
