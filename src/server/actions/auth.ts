"use server";

import { revalidatePath } from "next/cache";
import { signIn } from "../auth";

export async function SignInMail(formData: FormData) {
  await signIn("nodemailer", {
    email: formData.get("email"),
  });

  revalidatePath("/sign-in");
}
