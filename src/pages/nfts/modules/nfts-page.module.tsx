import { useTonConnectModal, useTonWallet } from "@tonconnect/ui-react";
import { ActionsContainer, ConnectionStatusCard, Container } from "./components/nfts-page-module.styled";
import { PrimaryButtonVariant } from "@challenge.day/uikit";

export default function NFTsPageModule() {
  const tonWallet = useTonWallet();
  const { open } = useTonConnectModal();
  return (
    <Container>
      <ConnectionStatusCard>
        <h3 style={{ color: "#fafbfc", fontWeight: 500, fontFamily: "Montserrat", fontSize: "20px" }}>
          {!tonWallet ? "Connect your TON wallet" : "TON wallet is connected"}
        </h3>
        <p style={{ color: "#fafbfc", fontWeight: 500, fontFamily: "Montserrat", fontSize: "15px" }}>
          {!tonWallet
            ? "Connect your crypto wallet. If you do not have one, you may create one directly on Telegram."
            : "Your crypto wallet is connected"}
        </p>
      </ConnectionStatusCard>
      <div style={{ flex: 1, minHeight: 80, fontFamily: "Montserrat", fontWeight: "600" }} />
      <ActionsContainer>
        {!tonWallet && (
          <PrimaryButtonVariant onClick={open} style={{ width: "100%", height: 50 }}>
            <span style={{ color: "#003cf6", textTransform: "capitalize" }}>connect your tON wallet</span>
          </PrimaryButtonVariant>
        )}
        <PrimaryButtonVariant disabled={!tonWallet} style={{ width: "100%", height: 50 }}>
          <span style={{ color: !!tonWallet ? "#003cf6" : "#fafbfc", textTransform: "capitalize" }}>mint</span>
        </PrimaryButtonVariant>
      </ActionsContainer>
    </Container>
  );
}
