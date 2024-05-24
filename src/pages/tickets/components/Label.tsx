import { cn } from "@/lib/utils";

export default function LabelStatus({ status }) {
  return (
    <div className="flex">
      <div
        className={cn(
          "bg-gray-600 px-3 rounded-xl py-1 text-white text-xs",
          mapStatus[status]
        )}
      >
        {String(status).toUpperCase()}
      </div>
    </div>
  );
}

const mapStatus: any = {
  high: "bg-[#f12b2c]",
  normal: "bg-[#29cc97]",
  low: "bg-[#fec400]",
};
