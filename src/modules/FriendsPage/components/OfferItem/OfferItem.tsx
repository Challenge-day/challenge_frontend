import * as Styled from "./OfferItem.styled";
import { Icon } from "../../../../shared/Icon/Icon";

export default function OfferItem({
    title,
    img,
    count,
}: {
    title: string;
    img?: string;
    count: string;
}) {
    return (
        <Styled.OfferItem>
            <Styled.WrapperOffer >
                <Styled.Image src={img} />
                <Styled.WrapperText>
                    <Styled.OfferTitle>{title}</Styled.OfferTitle>
                    <Styled.OfferDescription>
                        <Styled.OfferCount>
                            <Icon
                                width={10}
                                height={10}
                                iconId={"icon-e-max"}
                                styles={{ fill: "yellow" }}
                            />
                            {count}
                        </Styled.OfferCount>
                        for you and your friend
                    </Styled.OfferDescription>
                </Styled.WrapperText>
            </Styled.WrapperOffer>
        </Styled.OfferItem>
    );
}
