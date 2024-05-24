import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LabelStatus from "./Label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical, MoreHorizontal, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const data = [
  {
    title: "Contact Email not Linked",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "high",
  },
  {
    title: "Adding Images to Feature Posts",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "low",
  },
  {
    title: "When will I be charged this month",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "high",
  },
  {
    title: "Payment not going through",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "normal",
  },
  {
    title: "Unable to add replies",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "high",
  },
  {
    title: "Down time since last week",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "normal",
  },
  {
    title: "Refferal bonus",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "low",
  },
  {
    title: "How i do change my password?",
    updated: "1 day ago",
    customerName: "Tom Cruise",
    date: "24.05.2019",
    time: "6:30 PM",
    priority: "normal",
  },
];

export default function TableList() {
  const isAdmin = () => {
    try {
      const dataUser = localStorage?.getItem("dataUser") as string;
      const parseUser = JSON?.parse(dataUser);
      return parseUser?.isAdmin;
    } catch (error) {
      return false;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tickets Detail</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead className="w-[220px]">Date</TableHead>
          <TableHead className="w-[120px]">Priority</TableHead>
          <TableHead className="text-right w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.title}>
            <TableCell>
              <div className="flex flex-row gap-x-5">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="text-xs text-gray-300">
                    updated {item.updated}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div>{item.customerName}</div>
              <div className="text-xs text-gray-300">on {item.date}</div>
            </TableCell>
            <TableCell>
              <div>{item.date}</div>
              <div className="text-xs text-gray-300">{item.time}</div>
            </TableCell>
            <TableCell>
              <LabelStatus status={item.priority} />
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Create Ticket & Form</DropdownMenuItem>
                  {isAdmin() && (
                    <>
                      <DropdownMenuItem>Details</DropdownMenuItem>
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
