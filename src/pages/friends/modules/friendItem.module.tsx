import { Icon } from "../../../shared/Icon/Icon";
import * as Styled from "./components/FriendItem/FriendItem.styled";

export default function FriendItem({
    name,
    avatar,
    count,
}: {
    name: string;
    avatar: string;
    count: string;
}) {
    return (
        <Styled.FriendItem>
            <Styled.Image src={avatar} />
            <Styled.Name>{name} </Styled.Name>
            <Icon
                width={15}
                height={17}
                iconId={"icon-e-max"}
                styles={{ fill: "yellow" }}
            />
            <Styled.Count>{count}</Styled.Count>
        </Styled.FriendItem>
    );
}
