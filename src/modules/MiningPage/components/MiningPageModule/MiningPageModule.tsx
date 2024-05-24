import {
    BorderForButton,
    Button,
    ButtonInWrapper,
    Container,
    WrapperButtons,
} from "./MiningPageModule.styled";

export default function MiningPageModule() {
    return (
        <Container>
            <Button>START</Button>
            <WrapperButtons>
                <BorderForButton>
                    <ButtonInWrapper>Tasks</ButtonInWrapper>
                </BorderForButton>
                <BorderForButton toLeft={true}>
                    <ButtonInWrapper>Friends</ButtonInWrapper>
                </BorderForButton>
            </WrapperButtons>
        </Container>
    );
}
