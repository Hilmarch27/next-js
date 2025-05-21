"use client";

import { Button } from "@/components/ui/button";
import { InputFloating } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignInMail } from "@/server/actions/auth";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export function FormSignIn({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={cn("w-full", className)}
      {...props}
      ref={ref}
      action={async (formData) => {
        await SignInMail(formData);
        ref.current?.reset(); // ⚠️ Ini membuat form jadi hybrid client/server, hati-hati
      }}
    >
      <FormEmail />
    </form>
  );
}

function FormEmail() {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-6">
      <InputFloating
        disabled={pending}
        required
        name="email"
        label="Email"
        type="email"
      />
      <Button disabled={pending} type="submit" className="w-full">
        {pending ? "Loading..." : "Sign In"}
      </Button>
    </div>
  );
}
