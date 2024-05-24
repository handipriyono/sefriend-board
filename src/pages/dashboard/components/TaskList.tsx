import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function TaskList() {
  return (
    <div>
      <Card className="min-h-20 py-4">
        <div className="flex flex-row justify-between mb-2 px-7">
          <div className="text-base font-semibold">Tasks</div>
          <div className="text-[#677aff] cursor-pointer">View all</div>
        </div>
        <div className="text-sm px-7">
          <span className="text-gray-600">
            <span className="text-gray-400">Today</span>
          </span>
        </div>
        <div className="mt-3">
          <div className="flex flex-row justify-between items-center py-5 border-b border-gray-300 px-7">
            <div className="text-sm flex flex-row gap-x-2">
              <div className="flex items-center space-x-2 ">
                <Checkbox id="terms" className="rounded-xl" />
              </div>

              <div>Finishs Ticket update</div>
            </div>
            <div className="text-gray-400">
              <BadgeColored value="URGENT" bgClass="bg-yellow-400" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-5 border-b border-gray-300 px-7">
            <div className="text-sm flex flex-row gap-x-2">
              <div className="flex items-center space-x-2 ">
                <Checkbox id="terms" className="!rounded-xl" />
              </div>
              Create new ticket example
            </div>
            <div className="text-gray-400">
              <BadgeColored value="NEW" bgClass="bg-green-400" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-5 px-7">
            <div className="text-sm flex flex-row gap-x-2">
              <div className="flex items-center space-x-2 ">
                <Checkbox
                  id="terms"
                  checked
                  color="red"
                  className=" !bg-blue-600 !rounded-xl"
                />
              </div>
              Update ticket report
            </div>
            <div className="text-gray-400">
              <BadgeColored
                value="DEFAULT"
                textClass="text-gray-400"
                bgClass="bg-gray-100"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export const BadgeColored = ({
  value = "-",
  textClass = "text-white",
  bgClass = " bg-gray-300",
}) => {
  return (
    <div
      className={cn(
        "text-xs font-semibold p-1 px-2 rounded-lg",
        textClass,
        bgClass
      )}
    >
      {value}
    </div>
  );
};
