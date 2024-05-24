import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  BookText,
  CircleUser,
  PieChart,
  Search,
  Ticket,
  UserRoundCog,
} from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

type TLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: TLayoutProps) {
  const location = useLocation();

  console.log("location", location.pathname);

  const getUser = () => {
    try {
      const dataUser = localStorage?.getItem("dataUser") as string;
      return JSON?.parse(dataUser);
    } catch (error) {
      return {};
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full flex-row  bg-white dark:bg-[#191d23]">
        <div className="fixed bg-[#363740] text-base text-white text-opacity-50 inset-y-0 left-0 z-10 hidden items-center flex-col border-r sm:flex">
          <div className="py-10 h-16 mb-7 flex items-center font-semibold justify-center gap-x-2">
            <div className="w-8 h-8 bg-[#3751ff] rounded-full" />
            Dashboard Kit
          </div>
          <div className="flex">
            <div className="justify-center items-center">
              <ul className="gap-y-2">
                <Link to="/dashboard">
                  <li
                    className={cn(
                      "group py-3 flex items-center gap-x-5 pr-20 pl-6  hover:bg-[#3e4049] hover:text-[#fff]",
                      location.pathname === "/dashboard"
                        ? "bg-[#3e4049] text-[#fff]"
                        : ""
                    )}
                  >
                    <div>
                      <PieChart
                        size={"17"}
                        className="text-gray-400 group-hover:!text-white"
                      />
                    </div>
                    Overview
                  </li>
                </Link>
                <Link to="/tickets">
                  <li
                    className={cn(
                      "group py-3 flex items-center gap-x-5 pr-20 pl-6  hover:bg-[#3e4049] hover:text-[#fff]",
                      location.pathname === "/tickets"
                        ? "bg-[#3e4049] text-[#fff]"
                        : ""
                    )}
                  >
                    <div>
                      <Ticket
                        size={"17"}
                        className="text-gray-400 group-hover:!text-white"
                      />
                    </div>
                    Tickets
                  </li>
                </Link>
                <li className="group py-3 flex items-center gap-x-5 pr-20 pl-6  hover:bg-[#3e4049] hover:text-[#fff]">
                  <div>
                    <CircleUser
                      size={"17"}
                      className="text-gray-400 group-hover:!text-white"
                    />
                  </div>
                  Contacts
                </li>
                <li className="group py-3 flex items-center gap-x-5 pr-20 pl-6  hover:bg-[#3e4049]  hover:text-[#fff]">
                  <div>
                    <UserRoundCog
                      size={"17"}
                      className="text-gray-400 group-hover:!text-white"
                    />
                  </div>
                  Agents
                </li>
                <li className="group py-3 flex items-center gap-x-5 pr-20 pl-6 hover:bg-[#3e4049]  hover:text-[#fff]">
                  <div>
                    <BookText
                      size={"17"}
                      className="text-gray-400 group-hover:!text-white"
                    />
                  </div>
                  Articles
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#f7f8fc] dark:bg-[#0d0f11] w-full flex flex-col px-8 ml-0 sm:ml-[200px] ">
          <div className="h-16 py-10 mb-7 px-3 flex items-center">
            <div className="flex justify-between w-full items-center">
              <div className="font-semi-bold text-xl">{title}</div>
              <div className="flex flex-row gap-x-3 items-center  py-3">
                <div className="flex justify-center items-center gap-x-5 ">
                  <ModeToggle />
                  <div>
                    <Search color="#c5c7cd" />
                  </div>
                  <div>
                    <Bell
                      color="#c5c7cd"
                      fill="#c5c7cd"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-3 pl-4 py-0  border-l border-gray-300">
                  <div className="text-sm">{getUser()?.name}</div>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl ">{children}</div>
        </div>
      </div>
    </>
  );
}
