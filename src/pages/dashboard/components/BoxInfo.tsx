import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BoxInfo() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card
          x-chunk="dashboard-01-chunk-0"
          className="group h-[130px] flex justify-center items-center flex-col border border-gray-300 hover:border-[#3751ff] cursor-pointer p-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-400 group-hover:text-[#3751ff] dark:text-gray-400">
              Unresolved
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold group-hover:text-[#3751ff] dark:text-gray-300">
            60
          </CardContent>
        </Card>

        <Card
          x-chunk="dashboard-01-chunk-1"
          className="group h-[130px] flex justify-center items-center flex-col border border-gray-300 hover:border-[#3751ff] cursor-pointer p-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-400 group-hover:text-[#3751ff] dark:text-gray-400">
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold group-hover:text-[#3751ff] dark:text-gray-300">
            16
          </CardContent>
        </Card>
        <Card
          x-chunk="dashboard-01-chunk-2"
          className="group h-[130px] flex justify-center items-center flex-col border border-gray-300 p-4 hover:border-[#3751ff] cursor-pointer"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-400 group-hover:text-[#3751ff] dark:text-gray-400">
              Open
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold group-hover:text-[#3751ff] dark:text-gray-300">
              43
            </div>
          </CardContent>
        </Card>
        <Card
          x-chunk="dashboard-01-chunk-3"
          className="group h-[130px] flex justify-center items-center flex-col border border-gray-300 p-4 hover:border-[#3751ff] cursor-pointer"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-400 group-hover:text-[#3751ff] dark:text-gray-400">
              On hold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold group-hover:text-[#3751ff] dark:text-gray-300">
              64
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
