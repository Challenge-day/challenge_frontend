import styled from "styled-components";

export const Container = styled.div`
  border-radius: 25px;
  background: var(--blue-100, #2054f4);
`;

export const HeadTitle = styled.h2`
  color: var(--white-100, #fafbfc);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 5px;
`;

export const HeadDescription = styled.h2`
  color: var(--white-100, #fafbfc);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 20px;
`;

export const OffersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-bottom: 20px;
`;

export const TitleSectionFriend = styled.h3`
  display: flex;
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 5px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid var(--white-gradient, rgba(250, 251, 252, 0.4));
  background: var(
    --white-gradient,
    linear-gradient(90deg, rgba(250, 251, 252, 0.08) 0%, rgba(250, 251, 252, 0.2) 100%)
  );
`;

export const LinkCopiedWrapper = styled.div`
  border-radius: 25px;
  background: var(--white-100, #fafbfc);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const LinkCopiedText = styled.p`
  color: var(--black-100, #050505);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: fit-content;
`;

export const CopyLink = styled.div`
  padding: 5px 20px;
  border-radius: 100px;
  background: var(--yellow, #ffee02);
  display: flex;
  align-items: center;
`;

export const CopyLinkText = styled.p`
  color: var(--black-100, #050505);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-right: auto;
`;

export const CopyLinkButton = styled.button`
  border-radius: 100px;
  background: var(--black-100, #050505);
  width: 40px;
  height: 40px;
  padding: 4px;
`;
