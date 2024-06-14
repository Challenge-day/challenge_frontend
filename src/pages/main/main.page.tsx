import { ReactNode } from "react";
import MainPageModule from "./modules/main-page.module";

const MainPage = ({ children }: {children: ReactNode}) => {
    return (
        <>
            <MainPageModule>{children}</MainPageModule>
        </>
    );
};

export default MainPage;
