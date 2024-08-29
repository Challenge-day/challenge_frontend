import React from "react";
import * as Styled from "./components/OpenOverlayPending.styled";

interface OpenOverlayProps {
  onClose: () => void;
  status: "Pending" | "Canceled";
}
const OpenOverlay: React.FC<OpenOverlayProps> = ({ onClose, status }) => {
  const handleBackgroundClick = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getMessage = (): { title: string; message: string } => {
    switch (status) {
      case "Pending":
        return {
          title: "Sorry!",
          message: "You'll have to wait a little while! The inspection continues.",
        };
      case "Canceled":
        return {
          title: "Subscription Failed!",
          message: "You were unable to subscribe! Try again.",
        };
    }
  };

  const { title, message } = getMessage();
  return (
    <Styled.Container onTouchStart={handleBackgroundClick}>
      <Styled.Card>
        <div>
          <Styled.Img />
          <Styled.TextH3>{title}</Styled.TextH3>
          <Styled.TextP>{message}</Styled.TextP>
        </div>
        <Styled.Btn onClick={onClose}>Confirm</Styled.Btn>
      </Styled.Card>
    </Styled.Container>
  );
};

export default OpenOverlay;
