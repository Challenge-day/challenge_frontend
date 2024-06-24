import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ status: string }>`
  padding: 48px 12px;
  border-radius: 100px;
  background-color: ${({ status }) => {
    switch (status) {
      case "Pending":
      case "Started":
        return `var(--white-100, #FAFBFC)`;
      default:
        return `var(--white-50, rgba(252, 252, 252, 0.4))`;
    }
  }};
  box-shadow: 0px 4px 4px 0px rgba(5, 5, 5, 0.25) inset;
  position: absolute;
  top: 20%;
  left: 20%;
  color: ${({ status }) => {
    switch (status) {
      case "Pending":
      case "Started":
        return `var(--blue-100, #2054F4);`;
      default:
        return `var(--white-100, #FAFBFC)`;
    }
  }};
  text-align: center;
  font-family: "Prosto One";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const defaultAnimation = keyframes`
    0%, 20%, 80%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
`;

export const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 290px;
  height: 290px;
  margin-bottom: 60px;
  text-align: center;
`;

export const LoaderDot = styled.div<{ status: string }>`
  position: absolute;
  width: 16px; /* 6.4px * (290px / 80px) */
  height: 16px;
  background-color: ${({ status }) => {
    switch (status) {
      case "Pending":
      case "Started":
        return `var(--white-100, #FAFBFC)`;
      default:
        return `var(--White-20, rgba(250, 251, 252, 0.20))`;
    }
  }};
  border-radius: 50%;
  animation: ${({ status }) =>
    status === "Started" &&
    css`
      ${defaultAnimation} 2s linear infinite
    `};
  &:nth-child(1) {
    animation-delay: 0s;
    top: 133.4px; /* 36.8px * (290px / 80px) */
    left: 270.272px; /* 66.24px * (290px / 80px) */
  }

  &:nth-child(2) {
    animation-delay: -0.1s;
    top: 80.392px; /* 22.08px * (290px / 80px) */
    left: 256.07479px; /* 62.29579px * (290px / 80px) */
  }

  &:nth-child(3) {
    animation-delay: -0.2s;
    top: 41.10421px; /* 11.30421px * (290px / 80px) */
    left: 227.392px; /* 51.52px * (290px / 80px) */
  }

  &:nth-child(4) {
    animation-delay: -0.4s;
    top: 6.808px; /* 7.36px * (290px / 80px) */
    left: 133.4px; /* 36.8px * (290px / 80px) */
  }

  &:nth-child(5) {
    animation-delay: -0.6s;
    top: 41.10421px; /* 11.30421px * (290px / 80px) */
    left: 40.392px; /* 22.08px * (290px / 80px) */
  }

  &:nth-child(6) {
    animation-delay: -0.7s;
    top: 80.392px; /* 22.08px * (290px / 80px) */
    left: 11.10421px; /* 11.30421px * (290px / 80px) */
  }

  &:nth-child(7) {
    animation-delay: -0.8s;
    top: 133.4px; /* 36.8px * (290px / 80px) */
    left: -4.808px; /* 7.36px * (290px / 80px) */
  }

  &:nth-child(8) {
    animation-delay: -0.9s;
    top: 187.392px; /* 51.52px * (290px / 80px) */
    left: 16.10421px; /* 11.30421px * (290px / 80px) */
  }

  &:nth-child(9) {
    animation-delay: -1s;
    top: 226.07479px; /* 62.29579px * (290px / 80px) */
    left: 40.392px; /* 22.08px * (290px / 80px) */
  }

  &:nth-child(10) {
    animation-delay: -1.2s;
    top: 260.272px; /* 66.24px * (290px / 80px) */
    left: 133.4px; /* 36.8px * (290px / 80px) */
  }

  &:nth-child(11) {
    animation-delay: -1.4s;
    top: 226.07479px; /* 62.29579px * (290px / 80px) */
    left: 227.392px; /* 51.52px * (290px / 80px) */
  }

  &:nth-child(12) {
    animation-delay: -1.5s;
    top: 187.392px; /* 51.52px * (290px / 80px) */
    left: 256.07479px; /* 62.29579px * (290px / 80px) */
  }
  &:nth-child(13) {
    animation-delay: -0.3s;
    top: 16.10421px;
    left: 187.392px;
  }
  &:nth-child(14) {
    animation-delay: -0.5s;
    top: 16.10421px;
    left: 80.392px;
  }
  &:nth-child(15) {
    animation-delay: -1.1s;
    top: 250.272px;
    left: 80.392px;
  }
  &:nth-child(16) {
    animation-delay: -1.3s;
    top: 250.272px;
    left: 187.392px;
  }
`;

export const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #333;
  white-space: pre;
  text-align: center;
`;

export const InstructionSlogan = styled.span`
  color: var(--white-100, #fafbfc);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 10px;
  width: 100%;
`;

export const InstructionDescription = styled.p`
  color: var(--white-100, #fafbfc);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export const WrapperStarted = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
`;

export const StartedCount = styled.p`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StartedProgress = styled.p`
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

export const StartedProgressCount = styled.span`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const StartedHour = styled.p`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

export const StartedHourCount = styled.span`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 6px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const StartedTotalText = styled.p`
  color: var(--white-100, #fafbfc);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
