import BoxInfo from "./components/BoxInfo";
import GraphStats from "./components/GraphStats";
import TaskList from "./components/TaskList";
import Unresolved from "./components/Unresolved";
import Layout from "@/components/layout";

export default function DashboardPage() {
  return (
    <>
      <Layout title="Overview">
        <div className="rounded-xl bg-white dark:bg-[#0d0f11]">
          <BoxInfo />
          <GraphStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-y-1 gap-y-5 mb-5">
            <div>
              <Unresolved />
            </div>
            <div>
              <TaskList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
