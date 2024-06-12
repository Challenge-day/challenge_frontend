import MainPageModule from "../main/modules/main-page.module";
import MiningPageModule from "./modules/mining-page.module";

export default function MiningPage() {
    return (
        <MainPageModule>
            <MiningPageModule />
        </MainPageModule>
    );
}
