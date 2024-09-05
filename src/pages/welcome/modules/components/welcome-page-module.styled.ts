import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainWrapper = styled.section`
  background-color: var(--blue-100);
  min-height: calc(100vh - 100px);
`;

export const MainContent = styled.div``;

export const Title = styled.h1`
  color: var(--white-100);
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 89%;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const Description = styled.div`
  color: var(--white-100);
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const DecorationBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Challange = styled.img`
  position: absolute;
  bottom: 15%;
  width: 100%;
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
