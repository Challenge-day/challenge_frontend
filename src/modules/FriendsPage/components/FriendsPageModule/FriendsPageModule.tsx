import { useState } from "react";
import { Icon } from "../../../../shared/Icon/Icon";
import { friendsList, offersList } from "../../data/data";
import FriendItem from "../FriendItem/FriendItem";
import OfferItem from "../OfferItem/OfferItem";
import * as Styled from "./FriendsPageModule.styled";

export default function FriendsPageModule() {
    const [copied, setCopied] = useState<boolean>(false);
    const handleClick = () => {
        setCopied(prevState => !prevState);
        setTimeout(() => {
            setCopied(prevState => !prevState);
        }, 2000)
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
                        copied={copied}
                        handleClick={handleClick}
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
