import { useMemo, useState } from "react";
import { friendsList, offersList } from "./data/data";
import OfferItem from "./offer-item.module";
import * as Styled from "./components/FriendsPageModule/friends-page-module.styled";
import FriendItem from "./friend-item.module";
import { Icon } from "../../../shared/Icon/Icon";
import Modal from "../../../shared/Modal/Modal";
import { useAppDispatch } from "../../../redux/hooks";
import { generateReferal } from "../../../redux/services/servicesThunk";
import { initInitData } from "@tma.js/sdk";

export default function FriendsPageModule() {
  const [copied, setCopied] = useState<boolean>(false);
  const initData = useMemo(() => initInitData(), []);
  const dispatch = useAppDispatch(); 
  const handleClick = () => {
    if (initData?.user?.id) {
      dispatch(generateReferal(initData?.user?.id));
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  return (
    <Styled.Container>
      <Styled.HeadTitle>Invite Friends!</Styled.HeadTitle>
      <Styled.HeadDescription>You and your friend will receive bonuses</Styled.HeadDescription>
      <Styled.OffersList>
        {offersList.map(({ title, img, count }) => (
          <OfferItem key={title} title={title} img={img} count={count} />
        ))}
      </Styled.OffersList>
      <Styled.TitleSectionFriend>My Friends</Styled.TitleSectionFriend>
      <Styled.FriendsList>
        {friendsList.map(({ name, avatar, count }) => (
          <FriendItem key={name} name={name} avatar={avatar} count={count} />
        ))}
      </Styled.FriendsList>
      <Styled.CopyLink>
        <Styled.CopyLinkText>Copy Invite Link</Styled.CopyLinkText>
        <Styled.CopyLinkButton onClick={handleClick} disabled={copied}>
          <Icon width={15} height={15} iconId={"icon-arrow-go"} />
        </Styled.CopyLinkButton>
      </Styled.CopyLink>
      {copied && (
        <Modal>
          <Styled.LinkCopiedWrapper>
            <Styled.LinkCopiedText>You copied your referal link. Share it with your friends!</Styled.LinkCopiedText>
            <Icon width={25} height={25} iconId={"icon-link"} styles={{ fill: "var(--blue-100, #2054f4)" }} />
          </Styled.LinkCopiedWrapper>
        </Modal>
      )}
    </Styled.Container>
  );
}
