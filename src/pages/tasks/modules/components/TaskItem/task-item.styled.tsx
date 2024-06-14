import styled from "styled-components";

export const TaskItem = styled.li<{ status: string }>`
    padding: 10px;
    border-radius: 25px;
    border: 1px solid var(--white-gradient, rgba(250, 251, 252, 0.4));
    display: grid;
    background-color: ${({ status }) => {
        switch (status) {
            case "Pending":
                return `var(--green, #96E585)`;
            case "Canceled":
                return `var(--red, #FF624D)`;
            case "Done":
                return `var(--Yellow, #FFEE02)`;
            default:
                return `var(--white-100, #FAFBFC)`;
        }
    }};
    flex-wrap: wrap;

    &:first-child {
        grid-column: 1 / -1;
        padding: 10px 15px;
        background: var(--black-100, #050505);
        align-items: center;
        margin-bottom: 5px;
        & > p {
            color: var(--white-100, #fafbfc);
            & > svg {
                fill: white;
            }
        }
        & > div > p,
        span {
            color: var(--white-100, #fafbfc);
            font-size: 20px;
            line-height: 120%;
        }

        & > div > button {
            padding: 10px;
            width: 40px;
            height: 40px;
        }
    }
`;

export const WrapperText = styled.div`
    display: flex;
    width: 100%;
    gap: 2px;
`;

export const TaskTitle = styled.p`
    color: var(--black-100, #050505);
    font-family: Montserrat, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    flex-grow: 1;
    width: 100%;
`;

export const TaskCount = styled.p`
    color: var(--black-100, #050505);
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
    & > svg {
        fill: var(--black-100, #050505);
    }
`;

export const TaskStatus = styled.p`
    color: var(--black-100, #050505);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    gap: 5px;
    align-items: center;
    & > svg {
        fill: var(--black-100, #050505);
    }
`;

export const TaskButton = styled.button`
    border-radius: 100px;
    border: 1px solid var(--white-100, #fafbfc);
    background: var(--black-100, #050505);
    width: 25px;
    height: 25px;
    margin-left: auto;
    padding: 4px;
`;
