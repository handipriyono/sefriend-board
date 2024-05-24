import { Card } from "@/components/ui/card";

export default function GraphStats() {
  return (
    <Card className="my-5 border border-gray-300 min-h-40 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-lg">
        <div className="col-span-1 lg:col-span-3 bg-white dark:bg-[#191d23] rounded-lg ">
          <div className="flex flex-row justify-between mb-2 px-7 py-5">
            <div className="text-base font-semibold">Today's trends</div>
          </div>
        </div>

        <div className=" border-l py-1 border-1">
          <div className="border-b border-gray-300 flex justify-center items-center flex-col py-4">
            <div className="text-xs text-gray-400 text-opacity-70">
              Resolved
            </div>
            <div className="text-lg font-semibold">449</div>
          </div>
          <div className="border-b border-gray-300 flex justify-center items-center flex-col py-4">
            <div className="text-xs  text-gray-400 text-opacity-70">
              Received
            </div>
            <div className="text-lg font-semibold">449</div>
          </div>
          <div className="border-b border-gray-300 flex justify-center items-center flex-col py-4">
            <div className="text-sm  text-gray-400 text-opacity-70">
              Average first response time
            </div>
            <div className="text-lg font-semibold">449</div>
          </div>
          <div className="border-b border-gray-300 flex justify-center items-center flex-col py-4">
            <div className="text-xs  text-gray-400 text-opacity-70">
              Average response time
            </div>
            <div className="text-lg font-semibold">449</div>
          </div>
          <div className=" flex justify-center items-center flex-col py-4">
            <div className="text-xs  text-gray-400 text-opacity-70">
              Resolution within SLA
            </div>
            <div className="text-lg font-semibold">94%</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
