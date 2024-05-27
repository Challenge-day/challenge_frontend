import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    border-radius: 25px;
    background: var(--blue-100, #2054f4);
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 48px 12px;
    border-radius: 100px;
    background: var(--white-50, rgba(252, 252, 252, 0.4));
    box-shadow: 0px 4px 4px 0px rgba(5, 5, 5, 0.25) inset;
    position: absolute;
    top: 20%;
    left: 20%;
    color: var(--white-100, #fafbfc);
    text-align: center;
    font-family: "Prosto One";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const WrapperButtons = styled.div`
    display: flex;
    gap: 15px;
`;

export const ButtonInWrapper = styled.button`
    width: 120px;
    padding: 10px 15px;
    border-radius: 100px;
    border: 1px solid transparent; /* for layout purposes */
    color: var(--white-100, #fafbfc);
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 600;
    line-height: 150%;
    background: var(--blue-100, #2054f4);
`;

export const BorderForButton = styled.div<{ toLeft?: boolean }>`
    background: ${({ toLeft }) =>
        toLeft
            ? `linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 100%)`
            : `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 100%)`};
    padding: 1px;
    border-radius: 50px;
`;

export const LoaderContainer = styled.div`
    position: relative;
    width: 255px;
    height: 255px;
    margin-bottom: 40px;
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
    position: relative;
    border-radius: 50%;
    width: 270px;
    height: 270px;
    box-sizing: border-box;

    &::before {
        content: '';
        left: -7px;
        top: -10px;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke-linecap="round" stroke="rgba(250, 251, 252, 0.20)" stroke-width="4" stroke-dasharray="20, 10, 15, 10, 20, 10, 40, 10, 20, 10" /></svg>');
    }

    &::after {
        content: '';
        left: -7px;
        top: -10px;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke-linecap="round" stroke="white" stroke-width="4" stroke-dasharray="100" /></svg>');
        animation: ${spin} 20s linear infinite;
        clip-path: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="white" /></svg>');
    }
    
`;
