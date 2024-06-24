import { useState } from "react";
import { Icon } from "../../../shared/Icon/Icon";
import {
  Button,
  Container,
  InstructionDescription,
  InstructionSlogan,
  LoaderDot,
  LoaderText,
  LoaderWrapper,
  StartedCount,
  StartedHour,
  StartedHourCount,
  StartedProgress,
  StartedProgressCount,
  StartedTotalText,
  WrapperStarted,
} from "./components/MiningPageModule/mining-page-module.styled";

export default function MiningPageModule() {
  const [status, setStatus] = useState<"Wait" | "Pending" | "Started">("Wait");
  const handleClick = () => {
    setStatus(() => "Pending");
    setTimeout(() => {
      setStatus(() => "Started");
    }, 3000);
  };
  return (
    <Container>
      <LoaderWrapper>
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderDot status={status} />
        <LoaderText>
          <Icon width={209} height={209} iconId={"background-start"} />
          {status === "Started" ? (
            <WrapperStarted>
              <StartedCount>
                <Icon width={15} height={15} iconId={"icon-e-max"} styles={{ fill: "white" }} />1 785 3126.00
              </StartedCount>
              <StartedProgress>
                Personal progress <StartedProgressCount>85%</StartedProgressCount>
              </StartedProgress>
              <StartedHour>
                CHLs / hour
                <StartedHourCount>0.01000</StartedHourCount>
              </StartedHour>
              <StartedTotalText>Total amount</StartedTotalText>
            </WrapperStarted>
          ) : (
            <Button onClick={() => handleClick()} status={status}>
              START
            </Button>
          )}
        </LoaderText>
      </LoaderWrapper>
      {status === "Started" ? (
        <>
          <InstructionDescription>The accrual process is well underway!</InstructionDescription>
          <InstructionDescription>Don't forget to come back in two hours!</InstructionDescription>
        </>
      ) : (
        <>
          <InstructionSlogan>Let's go!</InstructionSlogan>
          <InstructionDescription>Click the “Start” and begin mining!</InstructionDescription>
        </>
      )}
    </Container>
  );
}
