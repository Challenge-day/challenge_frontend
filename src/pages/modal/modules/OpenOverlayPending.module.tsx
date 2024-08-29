import React from "react";
import * as Styled from "./components/OpenOverlayPending.styled";
import oopsImg from "../images/Oops.png"

interface OpenOverlayProps {
  onClose: () => void;
}
const OpenOverlay: React.FC<OpenOverlayProps> = ({ onClose }) => {
  const handleBackgroundClick = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Styled.Container onTouchStart={handleBackgroundClick}>
      <Styled.Card>
        <div>
          <Styled.Img src={oopsImg} />
          <Styled.TextH3>Sorry!</Styled.TextH3>
          <Styled.TextP>You'll have to wait a little while! The inspection continue</Styled.TextP>
        </div>
        <Styled.Btn onClick={onClose}>Confirm</Styled.Btn>
      </Styled.Card>
    </Styled.Container>
  );
};

export default OpenOverlay;
