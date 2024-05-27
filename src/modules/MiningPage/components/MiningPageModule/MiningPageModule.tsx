import { Icon } from "../../../../shared/Icon/Icon";
import {
    BorderForButton,
    Button,
    ButtonInWrapper,
    Container,
    WrapperButtons,
    Loader,
    LoaderText,
    LoaderContainer,
} from "./MiningPageModule.styled";

export default function MiningPageModule() {
    return (
        <Container>
            <LoaderContainer>
                <Loader />
                <LoaderText>
                        <Icon
                            width={209}
                            height={209}
                            iconId={"background-start"}
                        />
                    <Button>
                        START
                    </Button>
                </LoaderText>
            </LoaderContainer>
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