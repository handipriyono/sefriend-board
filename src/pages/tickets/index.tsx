import {
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import TableList from "./components/Table";
import Layout from "@/components/layout";
import { Card } from "@/components/ui/card";

export default function TicketsPage() {
  return (
    <>
      <Layout title="Tickets">
        <div className="rounded-xl mb-5">
          <Card>
            <div className="flex items-center justify-between p-5">
              <h2 className="text-sm font-semibold">All Tickets</h2>
              <div className="flex flex-row gap-x-5">
                <div className="flex flex-row gap-1 items-center">
                  <ArrowUpWideNarrow
                    size={17}
                    className="text-gray-300 cursor-pointer"
                    fill="#808080"
                  />
                  <span className="text-xs">Sort</span>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <Filter
                    size={16}
                    className="text-gray-300 cursor-pointer"
                    fill="#eee"
                  />
                  <span className="text-xs">Filter</span>
                </div>
              </div>
            </div>
            <TableList />
            <div className="flex justify-end gap-x-5 px-5 p-5 mb-5">
              <div className="min-w-20 text-xs text-gray-400 gap-x-2 flex flex-row">
                <div> Rows per page</div>
                <select
                  name="row"
                  id="row"
                  className="bg-white dark:bg-transparent"
                >
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="min-w-20">
                <div className="min-w-20 text-xs text-gray-400 flex flex-row items-center gap-x-5">
                  1-8 of 1289
                  <div className="flex justify-center items-center gap-x-3">
                    <ChevronLeft size={18} className="cursor-pointer" />
                    <ChevronRight size={18} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    </>
  );
}
