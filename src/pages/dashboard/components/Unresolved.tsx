import { Card } from "@/components/ui/card";

export default function Unresolved() {
  return (
    <div>
      <Card className="min-h-20 py-4">
        <div className="flex flex-row justify-between mb-2 px-7">
          <div className="text-base font-semibold  dark:text-gray-300">
            Unresolved Tickets
          </div>
          <div className="text-[#677aff] cursor-pointer">View Details</div>
        </div>
        <div className="text-sm px-7">
          <span className="text-gray-600">
            <span className="text-gray-400">Group:</span> supports
          </span>
        </div>
        <div className="mt-3">
          <div className="flex flex-row justify-between items-center py-5 border-b border-gray-300 px-7">
            <div className="text-sm dark:text-gray-300">
              Waiting on Feature Request
            </div>
            <div className="text-gray-400">4283</div>
          </div>
          <div className="flex flex-row justify-between items-center py-5 border-b border-gray-300 px-7">
            <div className="text-sm dark:text-gray-300">
              Awaiting Customer Response
            </div>
            <div className="text-gray-400">1005</div>
          </div>
          <div className="flex flex-row justify-between items-center py-5 border-b border-gray-300 px-7">
            <div className="text-sm  dark:text-gray-300">
              Awaiting Developer Fix
            </div>
            <div className="text-gray-400">914</div>
          </div>
          <div className="flex flex-row justify-between items-center py-5 px-7">
            <div className="text-sm dark:text-gray-300">Pending</div>
            <div className="text-gray-400">281</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
