import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export function VerifyRequest({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-3">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Verification Email Sent</h1>
                <p className="text-balance text-muted-foreground">
                  Next Apps
                </p>
              </div>
              <Alert variant="default" className="bg-muted">
                <CheckCircle className="h-4 w-4 text-primary" />
                <AlertTitle>Check your inbox</AlertTitle>
                <AlertDescription>
                  We've sent a verification email to your email address. Please
                  check your inbox and click the verification link to complete
                  your registration.
                </AlertDescription>
              </Alert>

              <div className="text-sm text-muted-foreground">
                <p>
                  If you don't see the email in your inbox, please check your
                  spam folder.
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden bg-muted  rounded-md md:block">
            <img
              src="/placeholder.svg"
              alt="plcaeholder"
              className="absolute rounded-md inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        <a href="/">Need help?</a>.
      </div>
    </div>
  );
}
