import MainPageModule from "../main/modules/main-page.module";
import TasksPageModule from "./modules/task-page.module";

export default function TasksPage() {
    return (
        <MainPageModule>
            <TasksPageModule />
        </MainPageModule>
    );
}
