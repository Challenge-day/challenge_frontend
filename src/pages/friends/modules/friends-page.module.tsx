import { useState } from "react";
import { friendsList, offersList } from "./data/data";
import OfferItem from "./offer-item.module";
import * as Styled from "./components/FriendsPageModule/friends-page-module.styled";
import FriendItem from "./friend-item.module";
import { Icon } from "../../../shared/Icon/Icon";

export default function FriendsPageModule() {
    const [copied, setCopied] = useState<boolean>(false);
    const handleClick = () => {
        setCopied((prevState) => !prevState);
        setTimeout(() => {
            setCopied((prevState) => !prevState);
        }, 2000);
    };
    return (
        <Styled.Container>
            <Styled.HeadTitle>Invite Friends!</Styled.HeadTitle>
            <Styled.HeadDescription>
                You and your friend will receive bonuses
            </Styled.HeadDescription>
            <Styled.OffersList>
                {offersList.map(({ title, img, count }) => (
                    <OfferItem
                        key={title}
                        title={title}
                        img={img}
                        count={count}
                    />
                ))}
            </Styled.OffersList>
            <Styled.TitleSectionFriend>My Friends</Styled.TitleSectionFriend>
            <Styled.FriendsList>
                {friendsList.map(({ name, avatar, count }) => (
                    <FriendItem
                        key={name}
                        name={name}
                        avatar={avatar}
                        count={count}
                    />
                ))}
            </Styled.FriendsList>
            <Styled.CopyLink>
                <Styled.CopyLinkText>Copy Invitive Link</Styled.CopyLinkText>
                <Styled.CopyLinkButton onClick={handleClick} disabled={copied}>
                    <Icon width={15} height={15} iconId={"icon-arrow-go"} />
                </Styled.CopyLinkButton>
            </Styled.CopyLink>
            {copied && (
                <Styled.LinkCopiedWrapper>
                    <Styled.LinkCopiedText>
                        You copied your referal link. Share it with your
                        friends!
                    </Styled.LinkCopiedText>
                    <Icon
                        width={25}
                        height={25}
                        iconId={"icon-link"}
                        styles={{ fill: "var(--blue-100, #2054f4)" }}
                    />
                </Styled.LinkCopiedWrapper>
            )}
        </Styled.Container>
    );
}
