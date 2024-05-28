import { Icon } from "../../../../shared/Icon/Icon";
import {
    Button,
    Container,
    LoaderText,
    LoaderWrapper,
    LoaderDot,
    InstructionSlogan,
    InstructionDescription,
} from "./MiningPageModule.styled";

export default function MiningPageModule() {
    return (
        <Container>
            <LoaderWrapper>
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderText>
                    <Icon
                        width={209}
                        height={209}
                        iconId={"background-start"}
                    />
                    <Button>START</Button>
                </LoaderText>
            </LoaderWrapper>
                <InstructionSlogan>Let's go!</InstructionSlogan>
                <InstructionDescription>Click the “Start” and begin mining!</InstructionDescription>
        </Container>
    );
}
