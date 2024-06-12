import MainPageModule from "../main/modules/main-page.module";
import FriendsPageModule from "./modules/friends-page.module";

export default function FriendsPage() {
    return (
        <MainPageModule>
            <FriendsPageModule />;
        </MainPageModule>
    );
}
