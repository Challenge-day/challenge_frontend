import telephoneStar from "./../images/telephoneStar.png";
import telephone from "../images/telephone.png";

export const offersList: { title: string; img: string; count: string }[] = [
    { title: "Invite a friend", count: "2 000", img: telephone },
    {
        title: "Invite a friend with Telegram Premium",
        img: telephoneStar,
        count: "2 000",
    },
];

export const friendsList: { avatar: string; name: string; count: string }[] = [
    { avatar: "https://www.vokrug.tv/pic/person/e/3/7/d/e37dd33ad6cbb69b1e488a9b8031d8f7.jpeg", count: "2 000", name: "Saniae" },
    { avatar: "https://www.vokrug.tv/pic/person/e/3/7/d/e37dd33ad6cbb69b1e488a9b8031d8f7.jpeg", name: "Juli", count: "2 000" },
    { avatar: "https://www.vokrug.tv/pic/person/e/3/7/d/e37dd33ad6cbb69b1e488a9b8031d8f7.jpeg", name: "Saniar", count: "2 000" },
    { avatar: "https://www.vokrug.tv/pic/person/e/3/7/d/e37dd33ad6cbb69b1e488a9b8031d8f7.jpeg", name: "Julib", count: "2 000" },
];
