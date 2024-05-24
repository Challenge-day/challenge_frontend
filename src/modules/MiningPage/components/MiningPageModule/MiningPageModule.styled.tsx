import styled from "styled-components";

export const Container = styled.div`
    border-radius: 25px;
    background: var(--blue-100, #2054f4);
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Button = styled.button`
    background: black;
    border-radius: 50px;
    width: 255px;
    height: 255px;
    margin-bottom: 40px;
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
