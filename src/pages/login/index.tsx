import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "./hooks/useLogin";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const {
    pass,
    email,
    onSubmit,
    onChangeEmail,
    onChangePassword,
    errorPassword,
    errorEmail,
  } = useLogin();

  return (
    <div className="h-screen block bg-transparent sm:flex justify-center items-center sm:bg-[#363740] mx-auto">
      <Card className="justify-center items-center sm:w-[330px] rounded-lg px-1">
        <CardHeader className="justify-center items-center">
          <div className="w-10 h-10 bg-[#3751ff] rounded-full" />
          <div className="text-[#bfc1ca] font-semibold">Dashboard Kit</div>

          <CardTitle className="text-xl space-x-2 pt-5">
            Login to Dashboard Kit
          </CardTitle>
          <CardDescription className="text-[#bfc1ca]">
            Enter your email and password below
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-5">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label
                htmlFor="email"
                className="text-xs text-[#bfc1ca] font-semibold"
              >
                EMAIL
              </Label>
              <Input
                value={email}
                id="email"
                type="email"
                onChange={onChangeEmail}
                placeholder="Email address"
                required
                className={cn(
                  "placeholder:opacity-40",
                  errorEmail ? "ring-red-500 ring-1" : ""
                )}
              />
              {errorEmail && (
                <Label
                  htmlFor="email-info"
                  className="text-xs text-red-500 font-normal"
                >
                  Email is required
                </Label>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label
                  htmlFor="password"
                  className="text-xs text-[#bfc1ca] font-semibold"
                >
                  PASSWORD
                </Label>
                <a
                  href="#"
                  className="ml-auto  inline-block text-xs text-[#bfc1ca]"
                >
                  Forgot password?
                </a>
              </div>

              <Input
                value={pass}
                id="password"
                type="password"
                onChange={onChangePassword}
                required
                className={cn(
                  "placeholder:opacity-40",
                  errorPassword ? "ring-red-500 ring-1" : ""
                )}
                placeholder="password"
              />
              {errorPassword && (
                <Label
                  htmlFor="password-info"
                  className="text-xs text-red-500 font-normal"
                >
                  Password minimum 8 character
                </Label>
              )}
            </div>

            <Button
              onClick={onSubmit}
              type="submit"
              className="w-full bg-[#3751ff] hover:opacity-80 hover:bg-[#3751ff]"
            >
              Log In
            </Button>
          </div>

          <div className="my-5 text-center text-sm text-[#bfc1ca]">
            Don&apos;t have an account?
            <a href="#" className="text-[#3751ff] px-2">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
