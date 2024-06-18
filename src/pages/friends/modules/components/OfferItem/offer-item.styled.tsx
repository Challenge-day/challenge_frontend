import styled from "styled-components";

export const OfferItem = styled.li`
  border-radius: 25px;
  border: 1px solid var(--white-gradient, rgba(250, 251, 252, 0.4));
  background: var(
    --white-gradient,
    linear-gradient(90deg, rgba(250, 251, 252, 0.08) 0%, rgba(250, 251, 252, 0.2) 100%)
  );
  padding: 10px;
  width: 100%;
`;

export const WrapperOffer = styled.button`
  display: flex;
  gap: 10px;
  text-align: left;
  width: 100%;
  justify-content: left;
`;

export const Image = styled.img`
  width: 38px;
  height: 44px;
  object-fit: contain;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

export const OfferTitle = styled.h4`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  width: 100%;
`;

export const OfferDescription = styled.p`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OfferCount = styled.span`
  color: var(--yellow, #ffee02);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  display: flex;
  align-items: center;
  gap: 3px;
`;
