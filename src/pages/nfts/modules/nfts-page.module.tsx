import { useTonConnectModal, useTonWallet } from "@tonconnect/ui-react";
import { ActionsContainer, ConnectionStatusCard, Container } from "./components/nfts-page-module.styled";
import { PrimaryButtonVariant } from "@challenge.day/uikit";
import IconWalletMin from "./images/Icon-Wallet-min.png";

export default function NFTsPageModule() {
  const tonWallet = useTonWallet();
  const { open } = useTonConnectModal();
  return (
    <Container>
      <ConnectionStatusCard>
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px" }}>
            <img src={IconWalletMin} alt="Wallet Icon" style={{ width: "50px", height: "50px" }} />

            <h3
              style={{
                textAlign: "left",
                color: "#fafbfc",
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: "20px",
                lineHeight: "120%",
              }}
            >
              {!tonWallet ? "Connect your TON wallet" : "TON wallet is connected"}
            </h3>
          </div>
          <p
            style={{
              color: "#fafbfc",
              textAlign: "left",
              fontWeight: 400,
              fontFamily: "Montserrat",
              fontSize: "15px",
            }}
          >
            {!tonWallet ? (
              <>
                <span style={{ textAlign: "right", marginBottom: "15px" }}>Connect your crypto wallet.</span>
                <br />
                <span style={{ textAlign: "right" }}>
                  If you do not have one, you may create one directly on Telegram.
                </span>
              </>
            ) : (
              "Your crypto wallet is connected"
            )}
          </p>
        </div>
      </ConnectionStatusCard>
      <div style={{ flex: 1, minHeight: 80, fontFamily: "Montserrat", fontWeight: "600" }} />
      <ActionsContainer>
        {!tonWallet && (
          <PrimaryButtonVariant onClick={open} style={{ width: "100%", height: 50 }}>
            <span
              style={{
                color: "var(--Blue-200, #003CF6)",
                textTransform: "capitalize",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "150%" /* 22.5px */,
              }}
            >
              connect your TON wallet
            </span>
          </PrimaryButtonVariant>
        )}
        <PrimaryButtonVariant disabled={!tonWallet} style={{ width: "100%", height: 50 }}>
          <span
            style={{
              color: !!tonWallet ? "#003cf6" : "#fafbfc",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "150%",
            }}
          >
            MINT
          </span>
        </PrimaryButtonVariant>
      </ActionsContainer>
    </Container>
  );
}
